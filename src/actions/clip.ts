"use server"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"

async function getSession() {
  const session = await getServerSession(options)
  return session
}

//좋아요 등록
export async function postClip(itemId: number) {
  const session = await getSession()
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/item?itemId=${itemId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.user.accessToken,
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
  const session = await getSession()
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/item?itemId=${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: session?.user.accessToken,
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
export async function deleteManyClips(itemIds: number[]) {
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/items`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.user.accessToken,
      },
      body: JSON.stringify({
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
