"use client"

import React, { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import IdDuplValidateForm from "./IdDuplValidateForm"
import PasswordValidateForm from "./PasswordValidateForm"
import { Member } from "@/types/memberType"
import NameForm from "./NameForm"
import AddressForm from "./AddressForm"
import PhoneNumberForm from "./PhoneNumberForm"
import EmailFrom from "./EmailFrom"
import MarketingAgreeForm from "../MarketingAgreeForm"

const mktAgreements = [
  {
    num: 0,
    id: "ssgPointMktAgr1",
    text: "(선택) 마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의",
  },
  {
    num: 1,
    id: "ssgPointMktAgr2",
    text: "(선택) 선택 정보 이마트/신세계백화점 공동 개인정보 수집 및 이용 동의",
  },
  {
    num: 2,
    id: "ssgcomMktAgr1",
    text: "(선택) 마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의",
  },
]

const ssgPointMktReceiveMethods = [
  { num: 0, id: "email", text: "이메일" },
  { num: 1, id: "sms", text: "문자" },
  { num: 2, id: "mail", text: "우편물" },
  { num: 3, id: "call", text: "텔레마케팅" },
]

const ssgcomMktReceiveMethods = [
  { num: 0, id: "email", text: "이메일" },
  { num: 1, id: "sms", text: "문자" },
]

const ssgPointMktReceiveNotice =
  "마케팅 정보 수신 동의를 하시면 신세계포인트 서비스 및 이벤트 정보를 받으실 수 있습니다."

const ssgcomMktReceiveNotice =
  "마케팅 정보 수신 동의를 하시면 SSG.COM 서비스 및 이벤트 정보를 받으실 수 있습니다."

type SignupFormPropsType = {
  member: Member
}

//TODO: 폼 검증 라이브러리 zod 적용하기
export default function SignupForm({ member }: SignupFormPropsType) {
  const [agreementsCheckedState, setAgreeCheckedState] = useState(
    Array.from({ length: mktAgreements.length }, () => false),
  )

  const [pointMethodCheckedState, setPointMethodCheckedState] = useState(
    Array.from({ length: ssgPointMktReceiveMethods.length }, () => false),
  )

  const [comMethodCheckedState, setComMethodCheckedState] = useState(
    Array.from({ length: ssgcomMktReceiveMethods.length }, () => false),
  )

  const handlePointCheck = (num: number) => {
    const updatedCheckedState = agreementsCheckedState.map((state, index) =>
      index === num ? !state : state,
    )

    if (num < 2) {
      setAgreeCheckedState(updatedCheckedState)
      const anyMktAgreementChecked = updatedCheckedState
        .slice(0, 2)
        .some((state) => state === true)

      if (anyMktAgreementChecked) {
        setPointMethodCheckedState(pointMethodCheckedState.map(() => true))
      } else {
        setPointMethodCheckedState(pointMethodCheckedState.map(() => false))
      }
    } else {
      setAgreeCheckedState(updatedCheckedState)
      const anyMktAgreementChecked = updatedCheckedState
        .slice(2)
        .some((state) => state === true)

      if (anyMktAgreementChecked) {
        setComMethodCheckedState(comMethodCheckedState.map(() => true))
      } else {
        setComMethodCheckedState(comMethodCheckedState.map(() => false))
      }
    }
  }

  return (
    <form className="text-[14px]">
      <div className="px-5 py-3.5 bg-[#F8F8F8] text-xs">
        <h3>회원 정보</h3>
      </div>
      <div className="px-5 text-[13px] tracking-tight">
        <IdDuplValidateForm />
        <PasswordValidateForm />
        <NameForm name={member.name} />
        <AddressForm />
        <PhoneNumberForm phoneNumber={member.phone} />
        <EmailFrom />
      </div>
      <div className="px-5 py-3.5 bg-[#F8F8F8] text-xs">
        <h3>마케팅 정보 수신 동의</h3>
      </div>
      <div className="px-5 py-3.5">
        <div className="pb-3.5">
          {mktAgreements.map((agreement) => (
            <div key={agreement.num}>
              {agreement.num == 0 && (
                <h5 className="font-black mb-3 text-xs">신세계포인트</h5>
              )}
              {agreement.num == 2 && (
                <h5 className="pt-3.5 mt-3.5 mb-3 font-black border-t text-xs">
                  SSG.COM
                </h5>
              )}
              <div className="flex flex-row justify-between py-1.5 pl-3 w-full text-zinc-600 text-xs font-normal">
                <Checkbox
                  id={agreement.id}
                  text={agreement.text}
                  onChange={() => handlePointCheck(agreement.num)}
                  checkboxShape="square"
                />
                <button className="w-[68px] h-[22px] text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]">
                  내용보기
                </button>
              </div>
              {agreement.num == 1 && (
                <MarketingAgreeForm
                  marketingInfoReceiveMethods={ssgPointMktReceiveMethods}
                  agreementsCheckedState={agreementsCheckedState.slice(0, 2)}
                  notice={ssgPointMktReceiveNotice}
                />
              )}
              {agreement.num == 2 && (
                <MarketingAgreeForm
                  marketingInfoReceiveMethods={ssgcomMktReceiveMethods}
                  agreementsCheckedState={agreementsCheckedState.slice(2)}
                  notice={ssgcomMktReceiveNotice}
                />
              )}
            </div>
          ))}
        </div>
        <div className="py-3.5 border-t text-xs font-bold">
          <p>
            선택 항목에 동의하지 않더라도 SSG.COM회원가입 및 기본 서비스를
            이용하실 수 있습니다.
          </p>
        </div>
        <div>
          <button className="w-full h-[48px] bg-[#FF5452] text-white text-[18px] font-semibold">
            가입하기
          </button>
        </div>
      </div>
    </form>
  )
}
