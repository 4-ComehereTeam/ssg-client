import ClipHeader from "@/components/clip/ClipHeader"
import ClipItems from "@/components/clip/ClipItems"
import ClipNavbar from "@/components/clip/ClipNavbar"
import ItemCard from "@/components/clip/ItemCard"
import React from "react"

//좋아요 개수 임시 데이터
const clipNums = {
  item: 2,
  brand: 0,
  category: 0,
}

//상품 목록 임시 데이터
const clipItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

export default function ClipPage() {
  //Header 추가하기
  return (
    <>
      <ClipHeader />
      <ClipNavbar clipNums={clipNums} />
      <ClipItems clipItems={clipItems} />
    </>
  )
}
