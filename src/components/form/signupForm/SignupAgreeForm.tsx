"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import { redirect, useRouter } from "next/navigation"

const agreements = [
  { num: 0, id: "allAgreeSignup", text: "약관 전체 동의" },
  { num: 1, id: "ssgPointAgree1", text: "(필수) 신세계포인트 회원 이용약관" },
  { num: 2, id: "ssgPointAgree2", text: "(필수) 개인정보 수집 및 이용 동의" },
  {
    num: 3,
    id: "ssgPointAgree3",
    text: "(필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의",
  },
  {
    num: 4,
    id: "ssgPointAgree4",
    text: "(필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의",
  },
  { num: 5, id: "ssgcomAgree1", text: "(필수) SSG.COM회원 이용약관" },
  { num: 6, id: "ssgcomAgree2", text: "(필수) 개인정보 수집 및 이용 동의" },
]

export default function SignupAgreeForm({}) {
  const router = useRouter()
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: agreements.length }, () => false),
  )

  const handleCheckboxChange = (position: number, id: string) => {
    const agreeAllIndex = agreements.findIndex(
      (agreement) => agreement.id === "allAgreeSignup",
    )

    const isAgreeAllPresent = agreeAllIndex !== -1
    if (id === "allAgreeSignup") {
      const areAllChecked = checkedState.every(Boolean)
      setCheckedState(checkedState.map(() => !areAllChecked))
    } else {
      let updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item,
      )

      if (isAgreeAllPresent) {
        const isRestChecked =
          updatedCheckedState.slice(0, agreeAllIndex).every(Boolean) &&
          updatedCheckedState.slice(agreeAllIndex + 1).every(Boolean)
        updatedCheckedState[agreeAllIndex] = isRestChecked
      }

      setCheckedState(updatedCheckedState)
    }
  }

  const handleClickNext = () => {
    for (const agreement of agreements.slice(1, agreements.length))
      if (!checkedState[agreement.num]) {
        alert(`'${agreement.text}'에 동의해주세요.`)
      } else {
        router.push("/member/signup/form")
      }
  }
  console.log(checkedState)

  return (
    <section className="flex flex-col px-5 mb-7 text-xs leading-4">
      <div className="py-5">
        {agreements.map((agreement) => (
          <div key={agreement.num} className="font-bold">
            {agreement.num == 0 && (
              <Checkbox
                id={agreement.id}
                text={agreement.text}
                onChange={() =>
                  handleCheckboxChange(agreement.num, agreement.id)
                }
                checked={checkedState[agreement.num]}
                isDisabled={false}
                checkboxShape="square"
              />
            )}
            {agreement.num == 1 && (
              <h5 className="py-4 mt-4 border-t border-[#cccccc] pl-3">
                신세계포인트
              </h5>
            )}
            {agreement.num == 5 && (
              <h5 className="py-4 mt-4 border-t border-[#cccccc] pl-3">
                SSG.COM
              </h5>
            )}
            {agreement.num > 0 && (
              <div className="flex gap-4 justify-between py-1.5 pl-3 w-full text-zinc-600 text-[0.7rem] font-normal">
                <Checkbox
                  id={agreement.id}
                  text={agreement.text}
                  onChange={() =>
                    handleCheckboxChange(agreement.num, agreement.id)
                  }
                  checked={checkedState[agreement.num]}
                  isDisabled={false}
                  checkboxShape="square"
                />
                <button className="w-[68px] h-[22px] text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]">
                  내용보기
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="w-full h-[48px] bg-[#FF5452] text-white text-lg font-semibold"
        onClick={() => handleClickNext()}
      >
        다음
      </button>
    </section>
  )
}
