import ClipHeader from "@/components/clip/ClipHeader"
import ClipMain from "@/components/clip/ClipMain"
import ClipNavbar from "@/components/clip/ClipNavbar"
import React from "react"

async function getClipItemIds(memberId: number) {
  try {
    const res = await fetch(
      "https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
        }),
        next: { tags: ["clipCancle"] },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      // return data.itemIds
      return [1, 2, 3, 4]
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function ClipPage() {
  //memberId는 쿠키에서 가져오기
  const itemIds = await getClipItemIds(1)
  console.log(itemIds)
  //Header 추가하기
  return (
    <>
      <ClipHeader />
      <ClipNavbar />
      <ClipMain itemIds={itemIds} />
    </>
  )
}
