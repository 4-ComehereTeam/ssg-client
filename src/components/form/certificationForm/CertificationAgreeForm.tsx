"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import { AgreementsType } from "@/types/agreementType"

type AgreeFormProps = {
  agreements: AgreementsType
  checkboxShape?: string
}

export default function CertificationAgreeForm({
  agreements,
  checkboxShape,
}: AgreeFormProps) {
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: agreements.length }, () => false),
  )

  const handleCheckboxChange = (position: number, id: string) => {
    const agreeAllIndex = agreements.findIndex(
      (agreement) => agreement.id === "agreeAll",
    )

    const isAgreeAllPresent = agreeAllIndex !== -1

    if (id === "agreeAll") {
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
    <section className="flex flex-col py-5 text-sm leading-4 bg-zinc-100">
      {agreements.map((agreement) => (
        <div
          key={agreement.num}
          className="flex justify-between items-start px-4 py-3.5 w-full bg-white border-t border-solid text-zinc-600 text-xs"
        >
          <Checkbox
            id={agreement.id}
            text={agreement.text}
            onChange={() => handleCheckboxChange(agreement.num, agreement.id)}
            checked={checkedState[agreement.num]}
            checkboxShape={checkboxShape}
          />
          <button className="w-[58px] h-[20px] text-xs text-center bg-[#F8F8F8] border border-slate-300">
            내용보기
          </button>
        </div>
      ))}
    </section>
  )
}
