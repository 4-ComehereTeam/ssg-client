"use client"

import { useState } from "react"
import GenderSelectionForm from "./GenderSelectionForm"

interface DropdownOption {
  label: string
  value: string
}

const Dropdown: React.FC<{ options: DropdownOption[] }> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0],
  )

  return (
    <select
      className="py-1.7 h-8 text-black bg-white w-full"
      value={selectedOption.value}
      onChange={(e) =>
        setSelectedOption(
          options.find((option) => option.value === e.target.value) ||
            options[0],
        )
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default function CertificationForm() {
  const [showVerificationInput, setShowVerificationInput] = useState(false)
  //TODO: 인증번호 입력 제한시간(3분) 구현하기

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowVerificationInput(true)
  }
  return (
    <form className="flex flex-col text-sm leading-4 bg-zinc-100">
      <section className="flex gap-px justify-between px-3 py-3.5 mt-6 bg-white border-t border-solid border-zinc-100">
        <input placeholder="이름" className="text-zinc-600" />
        <GenderSelectionForm />
      </section>
      <section className="flex justify-between px-3 py-3 bg-white border-t border-solid border-zinc-100 text-zinc-600">
        <input
          className="w-70 h-8"
          placeholder="생년월일 8자리(예. 20100101)"
        />

        <Dropdown
          options={[
            { label: "내국인", value: "내국인" },
            { label: "외국인", value: "외국인" },
          ]}
        />
      </section>
      <section className="px-3 py-3 bg-white border-t border-solid border-zinc-100">
        <Dropdown
          options={[
            { label: "SKT", value: "SKT" },
            { label: "KT", value: "KT" },
            { label: "LGU+", value: "LGU+" },
          ]}
        />
      </section>
      <section className="py-3 px-3 bg-white border-t border-solid border-zinc-100 text-zinc-600">
        <input className="w-full h-8" placeholder="-없이 휴대폰번호 입력" />
      </section>
      {showVerificationInput ? (
        <section className="py-3 px-3 bg-white border-t border-solid border-zinc-100 text-zinc-600">
          <input className="w-full h-8" placeholder="인증번호 입력" />
        </section>
      ) : (
        <button
          type="submit"
          className="justify-center items-center px-16 py-4 text-base font-semibold text-center text-white whitespace-nowrap bg-red-400"
        >
          인증번호 요청
        </button>
      )}
    </form>
  )
}
