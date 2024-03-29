"use client"

import { signOut, useSession } from "next-auth/react"
import Separator from "../ui/Separator"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SigninStateBar() {
  const { data: session } = useSession()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSignout = () => {
    signOut({ callbackUrl: "/" })
    setIsLoggedIn(false)
  }

  useEffect(() => {
    // console.log(session)
    if (session?.user) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn, session])

  return (
    <>
      <li className="pl-[20px]">
        {isLoggedIn ? (
          <Link href={"/"}>홈</Link>
        ) : (
          <Link href={"/member/signin"}>로그인</Link>
        )}
      </li>
      <Separator />
      <li>
        {isLoggedIn ? (
          <button onClick={() => handleSignout()}>로그아웃</button>
        ) : (
          <Link href={"/member/signupIntro"}>회원가입</Link>
        )}
      </li>
      <Separator />
    </>
  )
}
