"use client"

import {
  ssgcomMktAgreements,
  ssgcomMktReceiveMethods,
  ssgcomMktReceiveNotice,
} from "@/data/agreements"
import MarketingAgreeForm from "./MarketingAgreeForm"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"
import { useState } from "react"
import { useFormState } from "react-dom"
import { AgreementsType, MktReceiveMethodsType } from "@/types/agreementType"
import { createSimpleUser } from "@/actions/signup/createSimpleUser"
import { signOut, useSession } from "next-auth/react"
import GenderSelection from "@/components/ui/Buttons/GenderSelection"
import SocialSignupAgree from "./SocialSignupAgree"

export default function SocialSignupForm() {
  const { data: session } = useSession()
  const [ssgcomAgrees, setSsgcomAgrees] = useState<MktReceiveMethodsType>(
    ssgcomMktReceiveMethods.reduce((acc, { id }) => {
      acc[id] = false
      return acc
    }, {} as MktReceiveMethodsType),
  )
  const [state, formAction] = useFormState(createSimpleUser, {
    error: "",
  })

  //마케팅수신동의 - 쓱닷컴
  const handleSsgcomChange = (
    type: keyof MktReceiveMethodsType,
    isChecked: boolean,
  ) => {
    setSsgcomAgrees((prevState) => ({ ...prevState, [type]: isChecked }))
  }

  // 동의한 수신 방법 항목의 text를 결합하여 문자열 생성
  const generateAgreementString = (
    agrees: MktReceiveMethodsType,
    methods: AgreementsType,
  ) => {
    const methodTexts: string[] = Object.entries(agrees)
      .filter(([key, value]) => value)
      .map(([key]) => {
        const method = methods.find((item) => item.id === key)
        return method ? method.text : ""
      })
      .filter((text) => text)

    let result = ""
    if (methodTexts.length > 0) {
      result = `${methodTexts.join(", ")}`
    }
    return result
  }

  const handleRoute = async () => {
    if (!state?.error) {
      await signOut({ redirect: true, callbackUrl: "/member/signin" })
    }
  }

  return (
    <form className="text-[14px] overflow-hidden" action={formAction}>
      <h3 className="px-5 py-3.5 bg-[#F8F8F8] text-xs">약관 동의</h3>
      <SocialSignupAgree />
      <h3 className="px-5 py-3.5 bg-[#F8F8F8] text-xs">회원 정보</h3>
      <section className="px-5 text-[13px] tracking-tight">
        <section className="py-4 border-b">
          <dl className="flex flex-row items-center">
            <dt className="w-20">이메일</dt>
            <dd className="w-full">
              <input
                readOnly
                type="text"
                name="email"
                value={session ? session.user.email : ""}
                className="w-full"
              />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>이름
            </dt>
            <dd className="grow flex flex-col gap-1">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                type="text"
                name="name"
                placeholder="이름"
              />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>성별
            </dt>
            <dd className="grow flex flex-col gap-1">
              <GenderSelection />
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>휴대폰번호
            </dt>
            <dd className="grow flex flex-col gap-1">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                type="tel"
                name="phone"
                placeholder="'-'를 제외한 숫자만 입력"
              />
            </dd>
          </dl>
        </section>
      </section>
      <section className="px-5 text-xs">
        <h3 className="py-3.5 bg-[#F8F8F8]">마케팅 정보 수신 동의</h3>
        <div className="py-3.5">
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
      <AlertDialog>
        <div className="px-5">
          <AlertDialogTrigger
            type="submit"
            className="w-full mb-5 h-[48px] bg-[#FF5452] text-white text-[17px] font-semibold"
          >
            확인
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              {state?.error ? (
                <span>{state?.error}</span>
              ) : (
                <span className="mb-3">
                  회원가입이 완료되었습니다.
                  <br />
                  <br />
                  [마케팅 정보 수신 동의 변경일]
                  <br />
                  {new Date().getFullYear()}년 {new Date().getMonth() + 1}월{" "}
                  {new Date().getDate()}일
                  <br />
                  <br />
                  [마케팅 정보 수신 동의 안내]
                  <br />
                  {`SSG.COM: ${generateAgreementString(
                    ssgcomAgrees,
                    ssgcomMktReceiveMethods,
                  )}`}
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-[#FF5452] text-white"
              onClick={() => handleRoute()}
            >
              확인
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  )
}
