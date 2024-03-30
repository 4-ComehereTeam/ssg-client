import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import NaverProvider from "next-auth/providers/naver"
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
        // console.log("credentials:", credentials)

        /**
         * 백엔드에서 받은 응답에 token있어야함
         * user를 리턴하면 callbacks의 signIn에서 user로 전달되고
         * 그 다음 jwt콜백의 user로 전달됨
         */
        try {
          const res = await fetch(`${process.env.API_BASE_URL}/auth/signIn`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              signinId: credentials.signinId,
              password: credentials.password,
            }),
          })
          console.log("signin api res status:", res.status)
          if (res.ok) {
            const member = await res.json()
            return member.result
          }

          return null
        } catch (error) {
          console.log("signin error:", error)
          return null
        }
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    //signIn: authorize후 추가 확인
    async signIn({ user, profile, account }) {
      console.log("user:", user.id)
      console.log("account:", account)
      // 간편 로그인용 accessToken 발급 받기
      // credentials는 authorize에서 발급 받았으니 바로 통과
      if (account?.provider !== "credentials") {
        //TODO: 백엔드 통신 테스트하기
        //   try {
        //     const res = await fetch(`${process.env.API_BASE_URL}/auth/socialSignIn`, {
        //       method: "GET",
        //       headers: {
        //         "Content-Type": "application/json",
        //         "uuid": user.id
        //       },
        //     })
        //     console.log("OAuth res status:", res.status)
        //     if (res.ok) {
        //       const member = await res.json()
        //       return member.result
        //     }

        //     return "/member/signin"
        //   } catch (error) {
        //     console.log("OAuth error:", error)
        //     return "/member/signin"
        //   }
        return true
      }

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
      return session
    },
    async jwt({ token, user }) {
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
  },
}
