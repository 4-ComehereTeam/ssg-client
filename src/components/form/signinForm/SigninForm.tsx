"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { signin } from "@/actions/signin"
import { socialSignin } from "@/data/social"
import SocialButton from "@/components/form/signinForm/SocialButton"
import { useSearchParams } from "next/navigation"

function SigninForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
    ? searchParams.get("callbackUrl")
    : ""
  const [isKeepId, setIsKeepId] = useState<boolean>(false)
  const [signinId, setSigninId] = useState<String>("")
  const [state, formAction] = useFormState(signin, {
    error: "",
    callbackUrl: callbackUrl,
  })

  useEffect(() => {
    const keepIdState = localStorage.getItem("isKeepId")
    const savedSigninId = localStorage.getItem("signinId")
    if (keepIdState) {
      setIsKeepId(keepIdState === "true")
      if (keepIdState === "true" && savedSigninId) {
        setSigninId(savedSigninId)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isKeepId", String(isKeepId))
    localStorage.setItem("signinId", String(signinId)) //아이디 저장 안됨
  }, [isKeepId, signinId])

  return (
    <form className="flex flex-col px-5 mt-8 w-full" action={formAction}>
      <input
        type="text"
        name="signinId"
        placeholder="아이디"
        className="z-10 justify-center items-start py-5 pr-16 pl-4 h-[48.5px] text-sm whitespace-nowrap bg-white border border-solid border-stone-300"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="justify-center items-start py-5 pr-16 pl-4 h-[48.5px] text-sm whitespace-nowrap border border-solid border-stone-300"
      />

      {/* --------아이디 저장--------- */}
      <div
        className="mt-2 px-3 text-xs basis-3/4 flex flex-row leading-4"
        onClick={() => setIsKeepId(!isKeepId)}
      >
        <input
          id="keepId"
          type="checkbox"
          value={signinId && signinId.toString()}
          onChange={(e) => setSigninId(e.target.value)}
          className={`
              flex-none w-[17px] h-[17px]
              appearance-none
              border border-gray-300 rounded-full 
              bg-no-repeat
              bg-center
              bg-[url('/asset/images/check.svg')]
              focus:outline-none
              ${
                isKeepId
                  ? "bg-[url('/asset/images/check.svg')] bg-[#FE5B5B]"
                  : "bg-white"
              }
              
              `}
        />
        <span className=" pl-2">아이디 저장</span>
      </div>
      {/* --------아이디 저장--------- */}
      <p>{state?.error}</p>
      <button
        className="mt-[33px] justify-center items-center px-16 py-5 leading-[10px] font-medium text-white whitespace-nowrap bg-[#FF5452] h-[50px]"
        type="submit"
      >
        로그인
      </button>
      <nav className="flex gap-1.5 self-center mt-4 text-sm text-center text-[13px] text-neutral-600">
        <Link href="/member/findIdPw?id" className="grow whitespace-nowrap">
          아이디 찾기
        </Link>
        <Link href="/member/findIdPw?pw">| 비밀번호 찾기 |</Link>
        <Link href="/member/signup/intro">회원가입</Link>
      </nav>
      <div className="flex gap-5 justify-center mt-11 flex-nowrap text-xs text-center whitespace-nowrap text-neutral-600">
        {socialSignin.map((social, index) => (
          <SocialButton
            key={index}
            src={social.src}
            alt={social.alt}
            text={social.text}
            provider={social.provider}
          />
        ))}
      </div>
      {/* ----------광고------------ */}
      <button className="mt-[100px] justify-center text-center relative border border-solid bg-neutral-800 border-neutral-800 h-[52px] cursor-pointer text-white text-[14px]">
        <span className="absolute top-0 right-0 px-[6px] text-[11px] text-white bg-black bg-opacity-0">
          AD
        </span>
        휴대폰 간편 로그인
        <span className="text-[11px] text-zinc-500">광고</span>
      </button>
      {/* ----------광고------------ */}
      <Link
        href="#"
        className="self-center my-12 text-sm text-center whitespace-nowrap text-neutral-400"
      >
        비회원 조회하기
      </Link>
    </form>
  )
}

export default SigninForm
