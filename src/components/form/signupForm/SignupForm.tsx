"use client"

import React, { useState } from "react"
import { Member } from "@/types/memberType"
import MarketingAgreeForm from "../MarketingAgreeForm"
import {
  ssgPointMktAgreements,
  ssgcomMktAgreements,
  ssgPointMktReceiveMethods,
  ssgcomMktReceiveMethods,
  ssgPointMktReceiveNotice,
  ssgcomMktReceiveNotice,
} from "@/data/agreements"
import IdDuplCheckButton from "./IdDuplCheckButton"
import AddressForm from "../AddressForm"
import { createUser } from "@/actions/signup/createUser"

type SignupFormPropsType = {
  member: Member
}

export default function SignupForm({ member }: SignupFormPropsType) {
  const [memberId, setMemberId] = useState("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //비밀번호 검증
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password)) {
      alert("비밀번호는 8~20자리의 영문자와 숫자 조합이어야 합니다.")
    } else if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.")
    }

    //이메일 검증
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert("유효하지 않은 이메일 주소입니다.")
    }
  }

  //주소 검색
  const [isOpenAddress, setOpenAddress] = useState<boolean>(false)
  const [address, setAddress] = useState<string>("")

  const handleAddressBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setOpenAddress(true)
  }

  //마케팅수신동의 - 신세계포인트
  const [ssgPointAgrees, setSsgPointAgrees] = useState({
    agrees: [],
    methods: [],
  })

  //마케팅수신동의 - 쓱닷컴
  const [ssgcomAgrees, setSsgcomAgrees] = useState({ agrees: [], methods: [] })

  const handleSsgPointChange = (
    type: "agrees" | "methods",
    values: boolean[],
  ) => {
    setSsgPointAgrees((prevState) => ({ ...prevState, [type]: values }))
  }

  const handleSsgcomChange = (
    type: "agrees" | "methods",
    values: boolean[],
  ) => {
    setSsgcomAgrees((prevState) => ({ ...prevState, [type]: values }))
  }

  return (
    <form className="text-[14px]" action={createUser}>
      <h3 className="px-5 py-3.5 bg-[#F8F8F8] text-xs">회원 정보</h3>
      <section className="px-5 text-[13px] tracking-tight">
        <section className="py-4 border-b">
          <dl className="flex flex-row items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>아이디
            </dt>
            <dd className="grow flex flex-row gap-3 justify-between">
              <input
                type="text"
                name="signinId"
                placeholder="영어 또는 숫자로 6~20자리"
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
              <IdDuplCheckButton signId={member.signinId} />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row justify-between">
            <dt className="w-20 pt-2">
              <span className="text-[#FF5452]">*</span>비밀번호
            </dt>
            <dd className="grow flex flex-col gap-3">
              <input
                type="password"
                name="password"
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                placeholder="영문, 숫자 조합 8~20자리"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                placeholder="비밀번호 재확인"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>이름
            </dt>
            <dd className="flex items-center">{member.name}</dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-14 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>주소
            </dt>
            <dd className="grow flex flex-row gap-3 justify-between">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                type="text"
                name="address"
                value={address}
                readOnly
              />
              <button
                onClick={(e) => handleAddressBtn(e)}
                className="w-24 text-xs text-center text-white bg-[#666666] border border-slate-300 font-[550]"
              >
                우편번호
              </button>
              <AddressForm
                isOpen={isOpenAddress}
                handleAddress={setAddress}
                handleOpen={setOpenAddress}
              />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>휴대폰번호
            </dt>
            <dd className="flex items-center text-sm text">{member.phone}</dd>
          </dl>
        </section>
        <section className="py-4">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>이메일주소
            </dt>
            <dd className="grow flex flex-col gap-3">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                placeholder="이메일주소"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </dd>
          </dl>
        </section>
      </section>
      <section className="px-5 text-xs">
        <h3 className="py-3.5 bg-[#F8F8F8]">마케팅 정보 수신 동의</h3>
        <div className="py-3.5">
          <h5 className="font-black mb-3">신세계포인트</h5>
          <MarketingAgreeForm
            agreements={ssgPointMktAgreements}
            receiveMethods={ssgPointMktReceiveMethods}
            notice={ssgPointMktReceiveNotice}
            onChangeAgrees={handleSsgPointChange}
          />
          <h5 className="pt-3.5 mt-3.5 mb-3 font-black border-t">SSG.COM</h5>
          <MarketingAgreeForm
            agreements={ssgcomMktAgreements}
            receiveMethods={ssgcomMktReceiveMethods}
            notice={ssgcomMktReceiveNotice}
            onChangeAgrees={handleSsgcomChange}
          />
        </div>
        <p className="py-3.5 border-t font-bold">
          선택 항목에 동의하지 않더라도 SSG.COM회원가입 및 기본 서비스를
          이용하실 수 있습니다.
        </p>
      </section>
      <div className="px-5">
        <button
          className="mb-5 w-full h-[48px] bg-[#FF5452] text-white text-[17px] font-semibold"
          type="submit"
        >
          가입하기
        </button>
      </div>
    </form>
  )
}
