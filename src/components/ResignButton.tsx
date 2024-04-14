"use client"

import { resign } from "@/actions/resign"
import { useRouter } from "next/navigation"

export default function ResignButton() {
  const router = useRouter()
  const handleResign = async () => {
    const result = await resign()
    if (result) {
      alert("탈퇴하셨습니다.")
      router.replace("/")
    } else {
      alert("문제가 발생했습니다. 다시 시도해주세요.")
      router.refresh()
    }
  }

  return (
    <button
      className="bg-black text-white w-[60%] h-[40px] rounded-lg text-sm"
      onClick={() => handleResign()}
    >
      탈퇴하기
    </button>
  )
}
