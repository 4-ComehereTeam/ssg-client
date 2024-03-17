"use client"

import { useState } from "react"
import Checkbox from "../ui/Checkbox"

export default function AgreeForm() {
  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  const agreements = [
    { num: 0, id: "agree1", text: "개인정보 이용 및 제공 동의" },
    { num: 1, id: "agree2", text: "통신사 이용약관 동의" },
    { num: 2, id: "agree3", text: "고유식별정보 처리 동의" },
    { num: 3, id: "agree4", text: "서비스 이용약관 동의" },
    { num: 4, id: "agree5", text: "전체 동의" },
  ]

  const handleCheckboxChange = (position: number) => {
    if (position === agreements.length - 1) {
      const areAllChecked = checkedState.every(Boolean)
      setCheckedState(checkedState.map(() => !areAllChecked))
    } else {
      // 전체동의 아닐때 체크박스 업데이트

      // 전체동의 제외 모두 true면 전체동의도 true
      // 하나라도 false면 전체동의 false
      let updatedCheckedState = checkedState.map((check, index) =>
        index === position ? !check : check,
      )
      const isRestChecked = updatedCheckedState.slice(0, -1).every(Boolean)
      updatedCheckedState[agreements.length - 1] = isRestChecked ? true : false
      setCheckedState(updatedCheckedState)
    }
  }

  return (
    <section className="flex flex-col px-4 py-5 text-sm leading-4 bg-zinc-100">
      {agreements.map((agreement) => (
        <div
          key={agreement.num}
          className="flex justify-between items-start px-4 py-3.5 w-full whitespace-nowrap bg-white border-t border-solid text-zinc-600 text-[0.7rem]"
        >
          <Checkbox
            id={agreement.id}
            text={agreement.text}
            onChange={() => handleCheckboxChange(agreement.num)}
            checked={checkedState[agreement.num]}
          />
          <button className="w-[50px] h-[17px] text-[0.6rem] text-center bg-[#F8F8F8] border border-slate-300">
            내용보기
          </button>
        </div>
      ))}
    </section>
  )
}
