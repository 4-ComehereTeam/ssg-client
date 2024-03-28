"use client"

import { useState } from "react"
import GenderSelectionButton from "../../ui/Buttons/GenderSelectionButton"
import { Dropdown } from "../../ui/Dropdown"
import CertificationAgreeForm from "./CertificationAgreeForm"
import { certificationAgreements } from "@/data/agreements"

export default function CertificationForm() {
  const [showVerificationInput, setShowVerificationInput] = useState(false)
  //TODO: 인증번호 입력 제한시간(3분) 구현하기

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowVerificationInput(true)
  }
  return (
    <section className="px-4 bg-zinc-100">
      <form className="flex flex-col text-sm leading-4 ">
        <CertificationAgreeForm agreements={certificationAgreements} />
        <section className="flex gap-px justify-between px-3 py-3.5 mt-6 bg-white border-t border-solid border-zinc-100">
          <input placeholder="이름" className="basis-3/4 text-zinc-600" />
          <GenderSelectionButton />
        </section>
        <section className="flex gap-2 px-3 py-3 bg-white border-t border-solid border-zinc-100 text-zinc-600">
          <input
            className="h-8 basis-3/4"
            placeholder="생년월일 8자리(예. 20100101)"
          />
          <Dropdown
            options={[
              { label: "내국인", value: "내국인" },
              { label: "외국인", value: "외국인" },
            ]}
            style="py-1.7 h-8 basis-1/4 text-black"
          />
        </section>
        <section className="flex flex-row gap-2 px-3 py-3 bg-white border-t border-solid border-zinc-100">
          <Dropdown
            options={[
              { label: "SKT", value: "SKT" },
              { label: "KT", value: "KT" },
              { label: "LGU+", value: "LGU+" },
            ]}
            style="py-1.7 h-8 text-black basis-1/4"
          />
          <input
            className="h-8 basis-3/4"
            placeholder="-없이 휴대폰번호 입력"
          />
        </section>
        {showVerificationInput ? (
          <section className="py-3 px-3 bg-white border-t border-solid border-zinc-100 text-zinc-600">
            <input className="w-full h-8" placeholder="인증번호 입력" />
          </section>
        ) : (
          <button
            type="submit"
            className="justify-center items-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-red-400"
          >
            인증번호 요청
          </button>
        )}
      </form>
      <ul className="mt-4 ml-3 text-[0.7rem] tracking-tight leading-2 text-neutral-800">
        <li className="flex items-center mt-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          본인 명의의 휴대폰 정보를 정확히 입력하여 주시기 바랍니다.
        </li>
        <li className="flex items-center mt-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌
          받을 수 있습니다.
        </li>
        <li className="flex items-center my-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          인증문의: (주)NICE고객센터(1600-1522)
        </li>
      </ul>
    </section>
  )
}
