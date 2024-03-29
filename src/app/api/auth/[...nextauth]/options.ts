import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        signinId: { label: "signinId", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.signinId || !credentials?.password) {
          return null
        }
        console.log("credentials:", credentials)

        /**
         * 백엔드에서 받은 응답에 token있어야함
         * user를 리턴하면 callbacks의 signIn에서 user로 전달되고
         * 그 다음 jwt콜백의 user로 전달됨
         */
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
        console.log("signin api res status:", res.status)
        if (res.ok) {
          const member = await res.json()
          console.log(member)
          return member.result
        }

        return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    //signIn: authorize후 추가 확인
    async signIn({ user, profile }) {
      console.log("signIn user:", user)
      console.log("signIn profile:", profile)
      // if (user) {
      //   /**
      //    * signIn에서 추가적으로 할만한게 없음
      //    * OAuth 로그인시 기존 회원인지 아닌지 확인해서
      //    * 기존 회원이면 credential 방식으로 로그인 시키기?
      //    * 일단 이메일로 기존 회원 여부만 체크
      //    * 도 이미 authorize의 백엔드 로그인 요청에서 걸러짐
      //    */
      //   const res = await fetch(
      //     `${process.env.API_BASE_URL}/members/email/check`,
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         email: user.email,
      //       }),
      //     },
      //   )
      //   if (res.ok) {
      //     const data = await res.json()
      //     console.log(data)
      //   }
      // }

      return true
    },

    async session({ session, token }) {
      /**
       * session.user에 jwt콜백에서 받은 token을 할당
       * session을 리턴하면 브라우저의
       * 클라이언트 컴포넌트에서 {data:session} = useSession()으로
       * session.user.accessToken 접근 가능
       */
      session.user = token
      console.log("session: ", session)
      return session
    },
    async jwt({ token, user }) {
      console.log("jwt token:", token)
      console.log("jwt user:", user)
      /**
       * authorize에서 return한 user에 들어있는 access_token을
       * session에 저장하기 위해 동일 선상에 추가해서 return
       */
      return { ...token, ...user }
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  pages: {
    signIn: "/member/signin",
    // error: "/auth_error",
  },
}
