import type { NextRequest, NextFetchEvent } from "next/server"
import { NextResponse } from "next/server"
import { apiAuthPrefix, authRequeiredRoutes, protectedRoutes } from "./routes"
import { getServerSession } from "next-auth"
import { options } from "./app/api/auth/[...nextauth]/options"

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const accessToken = req.cookies.get("next-auth.session-token")
  // const session = getServerSession(options)
  // console.log(session)
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
    return NextResponse.redirect(
      new URL(`/member/signin?callbackUrl=${nextUrl.href}`, nextUrl),
    )
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
