import ClipHeader from "@/components/clip/ClipHeader"
import ClipItems from "@/components/clip/ClipItems"
import ClipNavbar from "@/components/clip/ClipNavbar"
import React from "react"

export default function ClipPage() {
  //Header 추가하기
  return (
    <>
      <ClipHeader />
      <ClipNavbar />
      <ClipItems />
    </>
  )
}
