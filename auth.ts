import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
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
        console.log(credentials)
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
        if (res.ok) {
          const user = await res.json()
          console.log(user)

          return user
        }

        return null
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    //provider의 authorize가 성공하면 아래 실행
    async signIn({ user, profile }) {
      console.log(user, profile)
      // if (profile) {
      //   console.log(profile)
      //   // 회원인지 아닌지 확인
      //   const res = await fetch(`${process.env.API_BASE_URL}/auth/oauth2`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       oauthId: user.id,
      //     }),
      //   })
      //   console.log(res)
      //   if (res.ok) {
      //     const user = await res.json()
      //     console.log("ssg user", user)
      //     // this.session.update({user})
      //     // 회원정보를 받아서 세션에 저장
      //   }

      //   console.log("not ssg user", user)
      //   // 회원이 아니면 회원가입 페이지로 이동

      //   //
      // }

      return true
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  pages: {
    signIn: "/member/signin",
    error: "/auth_error",
  },
})
