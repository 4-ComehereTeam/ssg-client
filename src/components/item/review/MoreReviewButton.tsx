"use client"

import Image from "next/image"
import React from "react"

export default function MoreReviewButton({
  reviewCount,
}: {
  reviewCount: number
}) {
  const handleAlert = () => {
    alert("현재 개발 중입니다.")
  }
  return (
    <div
      className="flex gap-2 h-10 mt-2 w-[90%] text-sm text-[#888888] items-center justify-center rounded-md border border-solid"
      onClick={handleAlert}
    >
      <span>더보기 ({reviewCount})</span>
      <div className="w-3">
        <Image
          width="12"
          height="12"
          src="https://img.icons8.com/small/16/000000/back.png"
          alt="back"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </div>
  )
}
