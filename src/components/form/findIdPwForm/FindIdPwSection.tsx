"use client"

import { useState } from "react"
import FindIdForm from "./FindIdForm"
import FindPwForm from "./FindPwForm"
import FindUserForm from "./FindUserForm"

export default function FindIdPwSection({ findId }: { findId: boolean }) {
  const [isFindId, setIsFindId] = useState(findId)
  const [isExistingMember, setIsExistingMember] = useState(false)
  const [payload, setPayload] = useState({
    email: "",
    name: "",
  })

  const handleExistingMember = (
    isExistingMember: boolean,
    payload: { email: string; name: string },
  ) => {
    setIsExistingMember(isExistingMember)
    setPayload(payload)
  }

  return (
    <section className="px-2 pt-[13px] pb-[35px] bg-zinc-100 text-xs tracking-tighter">
      <ul className="h-[51px] grid grid-cols-2 justify-around place-items-center bg-white">
        <li
          className={`flex justify-center items-center w-full h-full text-center border-t-[1px] border-t-gray-300 border-x-[1px] border-x-gray-300 font-bold ${
            isFindId
              ? "text"
              : "bg-[#F9F9F9] border-b-[1px] border-b-gray-300 text-[#717171]"
          }`}
          onClick={() => setIsFindId(!isFindId)}
        >
          아이디 찾기
        </li>
        <li
          className={`flex justify-center items-center w-full h-full text-center border-t-[1px] border-t-gray-300 border-x-[1px] border-x-gray-300 font-bold ${
            !isFindId
              ? ""
              : "bg-[#F9F9F9] border-b-[1px] border-b-gray-300 text-[#717171]"
          }`}
          onClick={() => setIsFindId(!isFindId)}
        >
          비밀번호 찾기
        </li>
      </ul>
      <div className="flex flex-col gap-7 py-5 text-xs bg-white border-x-[1px] border-x-gray-300">
        {isFindId ? (
          <FindIdForm />
        ) : !isExistingMember ? (
          <FindPwForm payload={payload} />
        ) : (
          <FindUserForm handleExistingMember={handleExistingMember} />
        )}
        <ul className="text-[10px] mt-5 px-3 list-disc list-inside">
          <li>
            이메일계정을 통해 {isFindId ? "아이디" : "비밀번호"}를 찾을 수
            있습니다.
          </li>
          <li>
            SSG에서 제공드리는 방법으로 {isFindId ? "아이디" : "비밀번호"}를
            찾으실 수 없는 고객님께서는 SSG 고객센터(1577-3419)로 연락주시기
            바랍니다.
          </li>
        </ul>
      </div>
    </section>
  )
}
