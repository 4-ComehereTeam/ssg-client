import NextAuth, { DefaultSession } from "next-auth/next"

declare module "next-auth" {
  interface Session {
    user: {
      signinId: string
      token: string
      name: string
      email: string
      uuid: string
    } & DefaultSession["user"]
  }
}
