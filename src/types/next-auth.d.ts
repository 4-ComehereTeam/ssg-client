import NextAuth, { DefaultSession } from "next-auth/next"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      accessToken: string
      name: string
      email: string
      uuid: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth" {
  interface User {
    // id: number // <- here it is
    signinId: string
  }
}
