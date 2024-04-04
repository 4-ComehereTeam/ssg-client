import type { NextRequest, NextFetchEvent } from "next/server"
import { NextResponse } from "next/server"
import {
  protectedRoutes,
  apiAuthPrefix,
  DEFAULT_SIGNIN_REDIRECT,
} from "./routes"
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret })
  const { nextUrl } = req

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)

  //"/api/auth/..."로 접속 후 로그인 페이지로 리다이렉트되므로 이대로 진행
  if (isApiAuthRoute) {
    return null
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
