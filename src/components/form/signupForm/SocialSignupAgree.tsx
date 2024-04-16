"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import { useRouter } from "next/navigation"
import { simpleSignupAgreeements } from "@/data/agreements"

export default function SocialSignupAgree({}) {
  const router = useRouter()
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: simpleSignupAgreeements.length }, () => false),
  )

  const handleCheckboxChange = (position: number, id: string) => {
    const agreeAllIndex = simpleSignupAgreeements.findIndex(
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

  return (
    <section className="flex flex-col px-5 text-xs leading-4">
      <div className="py-2">
        {simpleSignupAgreeements.map((agreement) => (
          <div
            key={agreement.id}
            className={`flex gap-4 justify-between py-3.5 pl-3 w-full text-zinc-600 text-[0.7rem] font-normal ${
              agreement.num < simpleSignupAgreeements.length - 1 &&
              "border-b-[1px]"
            }`}
          >
            <Checkbox
              id={agreement.id}
              text={agreement.text}
              onChange={() => handleCheckboxChange(agreement.num, agreement.id)}
              checked={checkedState[agreement.num]}
              isDisabled={false}
              checkboxShape="square"
            />
            {agreement.num < simpleSignupAgreeements.length - 1 && (
              <button className="w-[68px] h-[22px] text-xs text-center border border-black font-[550]">
                내용보기
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
