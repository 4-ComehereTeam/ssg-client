import { options } from "@/app/api/auth/[...nextauth]/options"
import ClipHeader from "@/components/clip/ClipHeader"
import ClipMain from "@/components/clip/ClipMain"
import ClipNavbar from "@/components/clip/ClipNavbar"
import { getServerSession } from "next-auth"
import React from "react"

async function getClipItemIds(accessToken: string) {
  try {
    const res = await fetch(
      "https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        next: { tags: ["getClipItemIds"] },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      // return data.itemIds
      return [1, 2, 3, 4] //예시
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

async function getClipNums(accessToken: string) {
  try {
    const res = await fetch(
      "https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        next: { tags: ["clip", "clipCancle", "manyClipCancle"] },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      return data.clipNums
      /**
       // return 예시
       {
          item: 4,
          brand: 0,
          category: 0,
        }
       * */
    } else {
      return {}
    }
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default async function ClipPage() {
  const session = await getServerSession(options)
  const itemIds = await getClipItemIds(session?.user.accessToken)
  const clipNums = await getClipNums(session?.user.accessToken)

  //Header 추가하기
  return (
    <>
      <ClipHeader />
      <ClipNavbar clipNums={clipNums} />
      <ClipMain itemIds={itemIds} />
    </>
  )
}
