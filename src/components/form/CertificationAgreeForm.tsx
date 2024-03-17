"use client"

import { useState } from "react"
import Checkbox from "../ui/Checkbox"
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
    // agreements props 중 id 속성이 "agreeAll"인 요소의 인덱스 찾기
    const agreeAllIndex = agreements.findIndex(
      (agreement) => agreement.id === "agreeAll",
    )
    // agreements 중 id 속성이 "agreeAll"인 요소가 존재하면 true 아니면 false
    const isAgreeAllPresent = agreeAllIndex !== -1

    if (id === "agreeAll") {
      // onChange 이벤트에서 전달받은 id값이 "agreeAll"이라면 checkedState 일괄 변경
      const areAllChecked = checkedState.every(Boolean)
      setCheckedState(checkedState.map(() => !areAllChecked))
    } else {
      // onChange 이벤트에서 전달받은 id값이 "agreeAll"이 아니면 checkedState 개별 변경
      let updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item,
      )

      /*
      agreements 중 id 속성이 "agreeAll"인 요소가 존재하면 
      "agreeAll"을 제외한 나머지 요소들의 checkedState가 모두 true인지 확인

      모두 true면 "agreeAll"인 요소의 checkedState 값 변경
      */
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
    <section className="flex flex-col px-4 py-5 text-sm leading-4 bg-zinc-100">
      {agreements.map((agreement) => (
        <div
          key={agreement.num}
          className="flex justify-between items-start px-4 py-3.5 w-full bg-white border-t border-solid text-zinc-600 text-[0.7rem]"
        >
          <Checkbox
            id={agreement.id}
            text={agreement.text}
            onChange={() => handleCheckboxChange(agreement.num, agreement.id)}
            checked={checkedState[agreement.num]}
            checkboxShape={checkboxShape}
          />
          <button className="w-[50px] h-[17px] text-[0.6rem] text-center bg-[#F8F8F8] border border-slate-300">
            내용보기
          </button>
        </div>
      ))}
    </section>
  )
}
