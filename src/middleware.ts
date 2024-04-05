import type { NextRequest, NextFetchEvent } from "next/server"
import { NextResponse } from "next/server"
import {
  protectedRoutes,
  apiAuthPrefix,
  DEFAULT_SIGNIN_REDIRECT,
  authRequeiredRoutes,
} from "./routes"
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret })
  const { nextUrl } = req

  const isRequiredAuth = authRequeiredRoutes.includes(nextUrl.pathname)
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return null
  }

  if (!session && isRequiredAuth) {
    return NextResponse.redirect(new URL("/member/signin", nextUrl))
  }

  if (isProtectedRoute) {
    if (session) {
      return NextResponse.redirect(
        new URL(DEFAULT_SIGNIN_REDIRECT, nextUrl), //TODO: 이전 페이지로 리다이렉트하기
      )
    }
    return null
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
