import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import KakaoProvider from "next-auth/providers/kakao"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      //ROLE 부여하기
      async authorize(credentials, req) {
        console.log("credentials", credentials)
        if (!credentials?.signinId || !credentials?.password) {
          return null
        }

        //MEMBER 테이블에 signinId 필드 추가해달라고 하기
        //result
        const res = await fetch(`${process.env.API_BASE_URL}/members/signIn`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            signInId: credentials.signinId,
            password: credentials.password,
          }),
        })
        console.log(res.status)
        if (res.ok) {
          const data = await res.json()
          console.log("signin data:", data)
          //백엔드에서 받은 user 정보를 저장
          /**
           * user{
           *   sub: data.signinId,
           *   name: data.name,
           *   email: data.email,
           *   gender: data.gender
           * }
           * */
          // return user
        }

        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile, account }) {
      console.log("user:", user)
      console.log("profile:", profile)
      console.log("account:", account)

      /**
       * signIn은 사용자의 로그인 허용 컨트롤
       * user는 credentials의 authorize 콜백의 응답
       * profile은 모든 provider에서 사용 가능, credentials에서 profile이 undefined면 user 사용
       * accout는 모든 provider에서 사용 가능, OAuth의 access_token 들어있으며 쿠키에 저장됨
       */
      if (profile) {
        // 회원인지 아닌지 확인은 유저 고유 아이디로!
        console.log("=======================")
        const res = await fetch(`${process.env.API_BASE_URL}/auth/oauth2`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oauthId: user.id,
          }),
        })
        if (res.ok) {
          const data = await res.json()
          console.log("ssg user", data)
          return {
            ...user,
            signinId: data.signinId,
            token: data.token,
            name: data.name,
            email: data.email,
            uuid: data.uuid,
          } as any //서버에서 유저정보 받아 저장하고 반환해야 next서버의 세션에 저장됨
        }
        // console.log("not ssg user", user)
        // 회원이 아니면 회원가입 페이지로 이동
        return "/member/signupIntro"
        //
      }

      return true
    },
    async session({ token, session }) {
      session.user = token
      console.log("session:", session)
      return session
    },
    async jwt({ token, user, account }) {
      token.accessToken = account?.access_token
      token.expiresIn = account?.expires_in
      console.log("token:", token)
      if (!token.sub) {
        token.sub = user.id
        return token
      }
      // const existingUser = await getUserBySigninId(token.sub)

      // if (!existingUser) return token

      return token
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  pages: {
    signIn: "/member/signin",
    // error: "/auth_error",
  },
})
