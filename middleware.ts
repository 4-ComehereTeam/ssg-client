import { auth } from "@/auth"

export default auth((req) => {
  console.log("ROUTE: ", req.nextUrl.basePath)
  const isLoggedIn = !!req.auth
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
