"use client"

import { signOut, useSession } from "next-auth/react"
import Separator from "./Separator"
import Link from "next/link"

export default function SigninStateBar() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
      <li className="pl-[20px]">
        {session?.user ? (
          <Link href={"/"}>홈</Link>
        ) : (
          <Link href={"/member/signin"}>로그인</Link>
        )}
      </li>
      <Separator className="w-[1px]" />
      <li>
        {session?.user ? (
          <button onClick={() => signOut()}>로그아웃</button>
        ) : (
          <Link href={"/member/signupIntro"}>회원가입</Link>
        )}
      </li>
      <Separator className="w-[1px]" />
    </>
  )
}
