"use client"

import { signOut, useSession } from "next-auth/react"
import Separator from "./ui/Separator"
import Link from "next/link"
import { Skeleton } from "./ui/Skeleton"

export default function SigninStateBar() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
      <li className="pl-[20px]">
        {loading ? (
          <Skeleton className="h-[16px]" />
        ) : session?.user.accessToken ? (
          <Link href={"/"}>홈</Link>
        ) : (
          <Link href={"/member/signin"}>로그인</Link>
        )}
      </li>
      <Separator className="w-[1px]" />
      <li>
        {session?.user.accessToken ? (
          <button onClick={() => signOut()}>로그아웃</button>
        ) : (
          <Link href={"/member/signup/intro"}>회원가입</Link>
        )}
      </li>
      <Separator className="w-[1px]" />
    </>
  )
}
