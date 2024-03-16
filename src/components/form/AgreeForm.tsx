"use client"

import { useState } from "react"
import Agreement from "../ui/Agreement"

export default function AgreeForm() {
  const [checkedState, setCheckedState] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  const handleLastCheckboxClick = () => {
    setCheckedState([true, true, true, true, true])
  }

  const handleCheckboxChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    )
    setCheckedState(updatedCheckedState)
  }

  const agreements = [
    { num: 0, text: "개인정보 이용 및 제공 동의" },
    { num: 1, text: "통신사 이용약관 동의" },
    { num: 2, text: "고유식별정보 처리 동의" },
    { num: 3, text: "서비스 이용약관 동의" },
    { num: 4, text: "전체 동의" },
  ]

  return (
    <section className="flex flex-col px-4 py-5 text-sm leading-4 bg-zinc-100">
      {agreements.map((agreement) => (
        <>
          <div className="flex justify-between items-start px-4 py-3.5 w-full whitespace-nowrap bg-white border-t border-solid text-zinc-600">
            <div className="flex gap-1">
              <input
                id={agreement.num.toString()}
                type="checkbox"
                value={agreement.num}
                checked={checkedState[agreement.num]}
                onChange={() => handleCheckboxChange(agreement.num)}
                onClick={
                  agreement.num === 4 ? handleLastCheckboxClick : undefined
                }
                className="
           appearance-none
           w-[17px] h-[17px]
           border border-gray-300 rounded-full 
           bg-[url('/assets/images/check.svg')]
           bg-no-repeat
           bg-center
           checked:bg-[#FE5B5B] focus:outline-none
           checked:bg-no-repeat
           checked:bg-center
           checked:bg-[url('/asset/images/check.svg')]
           "
              />
              <label htmlFor={agreement.num.toString()}>{agreement.text}</label>
            </div>
            <button className="bg-[#F8F8F8] border border-slate-400 w-[50px] h-[17px] text-xs">
              내용보기
            </button>
          </div>
        </>
      ))}
    </section>
  )
}
