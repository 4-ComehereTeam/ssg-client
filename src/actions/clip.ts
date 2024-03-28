"use server"

import { revalidateTag } from "next/cache"

export async function deleteClip(memberId: number, itemId: number) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/item`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId: memberId,
        itemId: itemId,
      }),
    })
    if (res.ok) {
      const data = await res.json()
      revalidateTag("clipCancle")
      console.log("delete clip success:", data)
      return data
    }
    return null
  } catch (error) {
    console.log("delete clip success:", error)
  }
}

export async function deleteManyClips(memberId: number, itemIds: number[]) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/item`, //여러개 삭제 api 만들어달라하기
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          itemIds: itemIds,
        }),
      },
    )
    if (res.ok) {
      const data = await res.json()
      // revalidateTag("clipCancle")
      console.log("delete many clips success:", data)
      return data
    }
  } catch (error) {
    console.log("delete many clips fail:", error)
  }
}