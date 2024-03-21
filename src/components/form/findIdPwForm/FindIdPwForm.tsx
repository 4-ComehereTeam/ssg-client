"use client"

import { useState } from "react"
import CertificationMethods from "../../ui/CertificationMethods"
import FindIdForm from "./FindIdForm"
import FindPwForm from "./FindPwForm"

export default function FindIdPw() {
  const [isFindId, setIsFindId] = useState(false)

  const [isSimpleMember, setIsSimpleMember] = useState(true)
  console.log(isSimpleMember)

  return (
    <section className="px-2 pt-[13px] pb-[35px] bg-zinc-100 text-xs tracking-tighter">
      <ul className="h-[51px] grid grid-cols-2 justify-around place-items-center bg-white">
        <li
          className={`flex justify-center items-center w-full h-full text-center border-t-[1px] border-t-gray-300 border-x-[1px] border-x-gray-300 ${
            isFindId ? "" : "bg-[#F9F9F9] border-b-[1px] border-b-gray-300"
          }`}
          onClick={() => setIsFindId(!isFindId)}
        >
          아이디 찾기
        </li>
        <li
          className={`flex justify-center items-center w-full h-full text-center border-t-[1px] border-t-gray-300 border-x-[1px] border-x-gray-300 ${
            !isFindId ? "" : "bg-[#F9F9F9] border-b-[1px] border-b-gray-300"
          }`}
          onClick={() => setIsFindId(!isFindId)}
        >
          비밀번호 찾기
        </li>
      </ul>
      <div className="flex flex-col gap-7 py-5 text-xs bg-white border-x-[1px] border-x-gray-300">
        <ul className="h-[55px] grid grid-cols-2 place-items-center font-semibold mx-3">
          <li
            className={`w-full h-full text-center border-y-[1px] border-y-slate-300 border-l-[1px] border-l-slate-300 py-[9%] ${
              isSimpleMember
                ? "bg-[#F9F9F9] text-slate"
                : "bg-[#666666] text-white"
            }`}
            onClick={() => setIsSimpleMember(false)}
          >
            <span>신세계포인트 통합회원</span>
          </li>
          <li
            className={`w-full h-full text-center border-[1px] border-slate-300  py-[5%] ${
              isSimpleMember
                ? "bg-[#666666] text-white"
                : "bg-[#F9F9F9] text-slate"
            }`}
            onClick={() => setIsSimpleMember(true)}
          >
            <span>
              간편회원
              <br /> (이메일/SNS)
            </span>
          </li>
        </ul>
        <div hidden={isSimpleMember}>
          <CertificationMethods />
          <ul className="text-[10px] mt-5 px-3 list-disc list-inside">
            <li>
              법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실
              수 있습니다.
            </li>
            <li>
              본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.
              <br />
              <b className="text-left">
                NICE평가정보(주) 고객센터 : 1600-1522 코리아크레딧뷰로(주)
                <br />
                고객센터 : 02-708-1000
              </b>
            </li>
          </ul>
        </div>
        <FindIdForm isSimpleMember={isSimpleMember} isFindId={isFindId} />
        <FindPwForm isSimpleMember={isSimpleMember} isFindId={isFindId} />
      </div>
    </section>
  )
}
