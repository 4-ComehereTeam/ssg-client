import NextAuth from "next-auth"
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
      async authorize(credentials, req) {
        console.log("credentials", credentials)
        if (!credentials?.signinId || !credentials?.password) {
          return null
        }

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
          console.log("data:", data)
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
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    async signIn({ user, profile, account }) {
      console.log("user:", user)
      // console.log("profile:", profile)
      // console.log("account:", account)

      /**
       * signIn은 사용자의 로그인 허용 컨트롤
       * user는 credentials의 authorize 콜백의 응답
       * profile은 모든 provider에서 사용 가능, credentials에서 profile이 undefined면 user 사용
       * accout는 모든 provider에서 사용 가능
       */
      if (profile) {
        // 회원인지 아닌지 확인
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
          const user = await res.json()
          console.log("ssg user", user)
          // this.session.user = user
          // 회원정보를 받아서 세션에 저장
        }
        console.log("signin session", this.session)
        // console.log("not ssg user", user)
        // 회원이 아니면 회원가입 페이지로 이동
        // return false
        //
      }

      return false
    },
    async session({ token, session }) {
      session.user = token //next-auth.d.ts에 정의한 user를 token으로 할당
      console.log("session:", session)
      return session
    },
    async jwt({ token, user, account }) {
      token.accessToken = account?.access_token
      token.expiresIn = account?.expires_in
      if (!token.sub) {
        token.sub = user.id
        return token
      }
      console.log("jwt:", token)
      // const existingUser = await getUserBysigninId(token.sub)

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
