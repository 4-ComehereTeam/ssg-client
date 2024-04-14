import type { NextRequest, NextFetchEvent } from "next/server"
import { NextResponse } from "next/server"
import { apiAuthPrefix, authRequeiredRoutes, protectedRoutes } from "./routes"

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const accessToken = req.cookies.get("next-auth.session-token")
  const { nextUrl } = req

  const isRequiredAuth = authRequeiredRoutes.some((authRequeiredRoute) =>
    nextUrl.pathname.startsWith(authRequeiredRoute),
  )
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isProtectedRoute = protectedRoutes.some((protectedRoute) =>
    nextUrl.pathname.startsWith(protectedRoute),
  )

  if (isApiAuthRoute) {
    return null
  }

  if (accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/not-found", nextUrl))
  }

  if (!accessToken && isRequiredAuth) {
    const signinUrl = new URL("/member/signin", req.url)
    signinUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    console.log(signinUrl.href)
    return NextResponse.redirect(signinUrl)
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
