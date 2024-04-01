"use server"

import { revalidateTag } from "next/cache"

//좋아요 등록
export async function postClip(itemId: number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/item?itemId=${itemId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      revalidateTag("clip")
      console.log("post clip success:", data)
    }
    return null
  } catch (error) {
    console.log("post clip fail:", error)
  }
}

//좋아요 취소
export async function deleteClip(itemId: number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/item?itemId=${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      revalidateTag("clipCancle")
      console.log("delete clip success:", data)
      return data
    }
    return null
  } catch (error) {
    console.log("delete clip fail:", error)
  }
}

//좋아요 여러 개 취소
export async function deleteManyClips(memberId: number, itemIds: number[]) {
  console.log(itemIds)
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/items`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId: memberId,
        itemIds: itemIds,
      }),
    })
    if (res.ok) {
      const data = await res.json()
      revalidateTag("manyClipCancle")
      console.log("delete many clips success:", data)
      return data
    }
  } catch (error) {
    console.log("delete many clips fail:", error)
  }
}
