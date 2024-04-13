import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import { getIsdormancyMember } from "@/actions/getIsdormancyMember"
import { idDuplCheck } from "@/actions/signup/idduplCheckAction"

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
          const res = await fetch(`${process.env.API_BASE_URL}/auth/signin`, {
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
          const data = await res.json()
          if (data.result) {
            console.log("signin success:", data.httpStatus)
            data.result.accessToken = res.headers.get("accessToken")
            data.result.id = data.result.signinId
            return data.result
          }
          throw data
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
    async signIn({ user, profile, account }) {
      if (account?.provider !== "credentials") {
        //간편회원 아이디가 없으면 간편회원가입 페이지로 이동
        const isExistId = await idDuplCheck(user.id)
        if (isExistId) {
          try {
            const res = await fetch(
              `${process.env.API_BASE_URL}/oauth/signin`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  signinId: user.id,
                }),
              },
            )
            const data = await res.json()
            if (data.result) {
              console.log("socialSignin success:", res.status)
              user.accessToken = res.headers.get("accessToken")
            } else {
              throw data.message
            }
          } catch (error) {
            console.log("socialSignin error:", error)
            return "/member/signin"
          }
        }
      }
      const signinId =
        account?.provider === "credentials" ? user.signinId : user.id

      //휴면여부 조회
      const isDormancyMember = await getIsdormancyMember(signinId)
      if (isDormancyMember) {
        return "/member/certification"
      }
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
      return url.startsWith(baseUrl) ? url : baseUrl + url
    },
  },
  pages: {
    signIn: "/member/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
