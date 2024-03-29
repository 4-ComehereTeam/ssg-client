"use client"

import { useState } from "react"
import MarketingAgreeForm from "./MarketingAgreeForm"
import {
  ssgPointMktAgreements,
  ssgcomMktAgreements,
  ssgPointMktReceiveMethods,
  ssgcomMktReceiveMethods,
  ssgPointMktReceiveNotice,
  ssgcomMktReceiveNotice,
} from "@/data/agreements"
import { createUser } from "@/actions/signup/createUser"
import { idDuplCheck } from "@/actions/signup/idduplCheckAction"
import { useFormState } from "react-dom"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"
import { AgreementsType, MktReceiveMethodsType } from "@/types/agreementType"
import { useRouter } from "next/navigation"
import Postcode from "@/components/address/PostCode"

export default function SignupForm() {
  const [signinId, setSigninId] = useState("")
  const [isDuplId, setIsDuplId] = useState(false)
  const [checkId, setCheckId] = useState(false)
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [isOpenAddress, setOpenAddress] = useState<boolean>(false)
  const [fullAddress, setFullAddress] = useState<string>("")
  const [detailAddress, setDetailAddress] = useState<string>("")
  const [zipCode, setZipCode] = useState<string>("")
  const [ssgPointAgrees, setSsgPointAgrees] = useState<MktReceiveMethodsType>(
    ssgPointMktReceiveMethods.reduce((acc, { id }) => {
      acc[id] = false
      return acc
    }, {} as MktReceiveMethodsType),
  )
  const [ssgcomAgrees, setSsgcomAgrees] = useState<MktReceiveMethodsType>(
    ssgcomMktReceiveMethods.reduce((acc, { id }) => {
      acc[id] = false
      return acc
    }, {} as MktReceiveMethodsType),
  )
  const [state, formAction] = useFormState(createUser, {
    error: "",
  })
  const router = useRouter()

  //아이디 중복 확인
  const checkIdDuplicate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const data = await idDuplCheck(signinId)
    setIsDuplId(data?.result)
    setCheckId(true)
  }

  //주소 검색
  const handleAddressBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setOpenAddress(true)
  }

  //마케팅수신동의 - 신세계포인트
  const handleSsgPointChange = (
    type: keyof MktReceiveMethodsType,
    isChecked: boolean,
  ) => {
    setSsgPointAgrees((prevState) => ({ ...prevState, [type]: isChecked }))
  }

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
      .filter(([key, value]) => value) // 동의한 항목만 필터링
      .map(([key]) => {
        //methods에서 해당 항목 찾기
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

  function getTodayDate() {
    const today = new Date()
    const year = today.getFullYear() // 년도
    const month = today.getMonth() + 1 // 월 (getMonth()는 0부터 시작하므로 +1)
    const date = today.getDate() // 일

    return `${year}년 ${month}월 ${date}일`
  }

  const handleRoute = () => {
    if (!state?.error) router.push("/member/signin")
  }
  console.log(zipCode, fullAddress, detailAddress)

  return (
    <form className="text-[14px]" action={formAction}>
      <h3 className="px-5 py-3.5 bg-[#F8F8F8] text-xs">회원 정보</h3>
      <section className="px-5 text-[13px] tracking-tight">
        <section className="py-4 border-b">
          <dl className="flex flex-row items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>아이디
            </dt>
            <dd className="grow flex flex-col gap-1">
              <div className="grow flex flex-row gap-1 justify-between">
                <input
                  className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                  type="text"
                  name="signinId"
                  placeholder="영어 또는 숫자로 6~20자리"
                  value={signinId}
                  onChange={(e) => setSigninId(e.target.value)}
                />
                <button
                  className="w-24 text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]"
                  onClick={checkIdDuplicate}
                >
                  중복확인
                </button>
              </div>
              <input readOnly hidden name="checkId" value={checkId ? 1 : 0} />
              {!checkId && signinId.length > 0 && (
                <p className="text-[#FF5452]">아이디 중복확인을 해주세요.</p>
              )}
              <input readOnly hidden name="isDuplId" value={isDuplId ? 1 : 0} />
              {checkId && isDuplId && (
                <p className="text-[#FF5452]">중복된 아이디입니다.</p>
              )}
              {checkId && !isDuplId && (
                <p className="text-[#4fdd43]">사용 가능한 아이디입니다.</p>
              )}
            </dd>
          </dl>
        </section>
        <section className="py-4 border-b">
          <dl className="flex flex-row justify-between">
            <dt className="w-20 pt-2">
              <span className="text-[#FF5452]">*</span>비밀번호
            </dt>
            <dd className="grow flex flex-col gap-1">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                type="password"
                name="password"
                placeholder="영문, 숫자 조합 8~20자리"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                placeholder="비밀번호 재확인"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {password.length > 0 &&
                confirmPassword.length > 0 &&
                password !== confirmPassword && (
                  <p className="text-[#FF5452]">
                    비밀번호가 일치하지 않습니다.
                  </p>
                )}
              {password.length > 0 &&
                confirmPassword.length > 0 &&
                password === confirmPassword && (
                  <p className="text-[#4fdd43]">비밀번호가 일치합니다.</p>
                )}
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
          <dl className="flex flex-row h-14 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>주소
            </dt>
            <dd className="grow flex flex-col gap-1">
              <div className="grow flex flex-row gap-1 justify-between">
                <input
                  className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                  type="text"
                  name="fullAddress"
                  value={fullAddress}
                  readOnly
                />
                <input
                  hidden
                  type="text"
                  name="zipCode"
                  readOnly
                  value={zipCode}
                />
                <input
                  hidden
                  type="text"
                  name="detailAddress"
                  readOnly
                  value={detailAddress}
                />
                <button
                  onClick={(e) => handleAddressBtn(e)}
                  className="w-24 text-xs text-center text-white bg-[#666666] border border-slate-300 font-[550]"
                >
                  우편번호
                </button>
                <Postcode
                  modalOpen={isOpenAddress}
                  setModalOpen={setOpenAddress}
                  setFullAddress={setFullAddress}
                  setDetailAddress={setDetailAddress}
                  setZipCode={setZipCode}
                />
              </div>
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
        {/* TODO: 이메일 본인인증하면 이메일 넘겨주기 */}
        <section className="py-4">
          <dl className="flex flex-row h-10 items-center">
            <dt className="w-20">
              <span className="text-[#FF5452]">*</span>이메일주소
            </dt>
            <dd className="grow flex flex-col gap-1">
              <input
                className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
                placeholder="이메일주소"
                type="email"
                name="email"
              />
            </dd>
          </dl>
        </section>
      </section>
      <section className="px-5 text-xs">
        {/* TODO: 폼 제출시 마케팅 정보 수신 동의한 항목 모달로 보여주기 */}
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
      <AlertDialog>
        <div className="px-5">
          <AlertDialogTrigger
            type="submit"
            className="w-full mb-5 h-[48px] bg-[#FF5452] text-white text-[17px] font-semibold"
          >
            가입하기
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
                  {getTodayDate()}
                  <br />
                  <br />
                  [마케팅 정보 수신 동의 안내]
                  <br />
                  {`신세계포인트: ${generateAgreementString(
                    ssgPointAgrees,
                    ssgPointMktReceiveMethods,
                  )}`}
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
