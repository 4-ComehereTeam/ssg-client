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
        try {
          const res = await fetch(`${process.env.API_BASE_URL}/auth/signIn`, {
            cache: "no-store",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              signinId: credentials.signinId,
              password: credentials.password,
            }),
          })
          if (res.ok) {
            const data = await res.json()
            data.result.accessToken = res.headers.get("accessToken")
            if (data.httpStatus === "OK") return data.result
            console.log("signin fail:", data.httpStatus)
            throw data.message
          }
          console.log("signin response status:", res.status)

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
      // console.log("user:", user) //모든 provider에서 제공
      // console.log("profile:", profile)
      // console.log("account:", account)

      //아직 안만들어짐
      // if (account?.provider !== "credentials") {
      //   try {
      //     const res = await fetch(
      //       `${process.env.API_BASE_URL}/auth/socialSignIn`,
      //       {
      //         method: "GET",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           id: user.id
      //         })
      //       },
      //     )
      //     if (res.ok) {
      //       const data = await res.json()
      //       if (data.httpStatus === "OK") {
      //         data.result.accessToken = res.headers.get("accessToken")
      //         //jwt콜백에서 저장됐는지 확인하기
      //       } else {
      //         throw data.message
      //       }
      //     } else {
      //       console.log("socialSignin fail:", res.status)
      //       return "/member/signin"
      //     }
      //   } catch (error) {
      //     console.log("socialSignin error:", error)
      //     return "/member/signin"
      //   }
      // }
      const signinId =
        account?.provider === "credentials" ? user.signinId : user.id

      //휴면여부 조회
      // try {
      //   const dormancyRes = await fetch(
      //     `${process.env.API_BASE_URL}/auth/dormancy/state`,
      //     {
      //       cache: "no-store",
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         signinId: signinId,
      //       }),
      //     },
      //   )
      //   if (dormancyRes.ok) {
      //     const data = await dormancyRes.json()
      //     console.log("getDormancy success:", data.httpStatus)
      //     if (data.httpStatus === "OK") {
      //       if (data.result) {
      //         return "/member/certification"
      //       }
      //       return true
      //     }
      //     console.log("getDormancy fail:", data.httpStatus)
      //     // return "/member/signin"
      //     throw `httpStatus: ${data.httpStatus}`
      //   }
      //   // return "/member/signin"
      //   throw `response status: ${dormancyRes.status}`
      // } catch (error) {
      //   console.log("getDormancy error:", error)
      //   return "/member/signin"
      // }
      return true
    },

    async session({ session, token }) {
      session.user = token
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
  },
  secret: process.env.NEXTAUTH_SECRET,
}
