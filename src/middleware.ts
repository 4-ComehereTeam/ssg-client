import { auth } from "@/auth"

export default auth((req) => {
  // console.log("ROUTE: ", req.nextUrl.basePath)
  const isLoggedIn = !!req.auth
  console.log("isLoggedIn:", isLoggedIn)
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
