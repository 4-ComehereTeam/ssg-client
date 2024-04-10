import type { NextRequest, NextFetchEvent } from "next/server"
import { NextResponse } from "next/server"
import { apiAuthPrefix, authRequeiredRoutes } from "./routes"

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const accessToken = req.cookies.get("next-auth.session-token")
  const { nextUrl } = req

  const isRequiredAuth = authRequeiredRoutes.some((authRequeiredRoute) =>
    nextUrl.pathname.startsWith(authRequeiredRoute),
  )
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)

  if (isApiAuthRoute) {
    return null
  }

  if (!accessToken && isRequiredAuth) {
    return NextResponse.redirect(new URL("/member/signin", nextUrl))
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
