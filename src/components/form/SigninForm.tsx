"use client"

import Link from "next/link"
import { useState } from "react"

import { SocialButton, socials } from "../ui/SocialButton"
import Checkbox from "../ui/Checkbox"

function SigninForm() {
  const [isKeepId, setIsKeepId] = useState<boolean>(false)

  const onClickKeepId = () => {
    if (!isKeepId) {
      alert("개인정보보호를 위해 개인 휴대폰에서만 사용하세요.")
    }
    setIsKeepId(!isKeepId)
  }

  return (
    <section className="flex flex-col px-5 mt-8 w-full">
      <input
        placeholder="아이디"
        className="z-10 justify-center items-start py-5 pr-16 pl-4 h-[48.5px] text-sm whitespace-nowrap bg-white border border-solid border-stone-300"
      />
      <input
        placeholder="비밀번호"
        className="justify-center items-start py-5 pr-16 pl-4 h-[48.5px] text-sm whitespace-nowrap border border-solid border-stone-300"
      />
      {/* --------아이디 저장--------- */}
      <span
        className="flex mt-[13.5px] px-[15px]"
        onClick={() => onClickKeepId()}
      >
        <Checkbox id="keepId" />
        <label htmlFor="keepId" className="pl-[5px] text-sm">
          아이디 저장
        </label>
      </span>
      {/* --------아이디 저장--------- */}
      <button className="mt-[33px] justify-center items-center px-16 py-5 leading-[10px] font-medium text-white whitespace-nowrap bg-[#FF5452] h-[50px]">
        로그인
      </button>
      <nav className="flex gap-1.5 self-center mt-4 text-sm text-center text-[13px] text-neutral-600">
        <Link href="#" className="grow whitespace-nowrap">
          아이디 찾기
        </Link>
        <Link href="#">| 비밀번호 찾기 |</Link>
        <Link href="#">회원가입</Link>
      </nav>
      <ul className="flex gap-5 justify-center mt-11 flex-nowrap text-xs text-center whitespace-nowrap text-neutral-600">
        {socials.map((button, index) => (
          <SocialButton
            key={index}
            src={button.src}
            alt={button.alt}
            text={button.text}
          />
        ))}
      </ul>
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
    </section>
  )
}

export default SigninForm
