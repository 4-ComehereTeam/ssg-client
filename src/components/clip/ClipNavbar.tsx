"use client"
import { useState } from "react"

//상품, 브랜드, 카테고리 별 좋아요 개수
//서버에서 받아와야함
const clipNums = {
  item: 2,
  brand: 0,
  category: 0,
}

type ClickStateType = {
  [key: string]: boolean
}

export default function ClipNavbar() {
  const [clickState, setClickState] = useState<ClickStateType>(() =>
    Object.keys(clipNums).reduce((acc, key) => {
      acc[key] = false // 모든 키를 false로 초기화
      return acc
    }, {} as ClickStateType),
  )

  return (
    <nav className="text-sm bg-[#F5F5F5]">
      <ul className="px-4 py-5 flex flex-row gap-3">
        <li onClick={() => setClickState({ ...clickState, item: true })}>
          <span>상품 ({clipNums.item})</span>
        </li>
        <li>
          <span>브랜드&스토어 ({clipNums.brand})</span>
        </li>
        <li>
          <span>카테고리 ({clipNums.category})</span>
        </li>
      </ul>
    </nav>
  )
}
