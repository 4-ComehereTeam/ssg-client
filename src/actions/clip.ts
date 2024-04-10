"use server"

import { getSession } from "@/lib/getSession"
import { revalidateTag } from "next/cache"

//개별 상품 좋아요 조회
export async function getClip(itemId: number | string) {
  revalidateTag("getClipItemIds")
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/item/${itemId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getClip success:", data.httpStatus)
      return data.result.isCliped
    }
    console.log("getClip fail", res.status)
    return false
  } catch (error) {
    console.log("getClip fail:", error)
    return false
  }
}

//좋아요 등록
export async function postClip(itemId: number | string) {
  revalidateTag("getClipItemIds")
  const session = await getSession()
  console.log(session?.user.accessToken)
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/item/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })
    if (res.ok) {
      const data = await res.json()
      console.log("postClip success:", data.httpStatus)
    }
    console.log("postClip status", res.status)
    return null
  } catch (error) {
    console.log("postClip fail:", error)
  }
}

//좋아요 취소
export async function deleteClip(itemId: number | string) {
  revalidateTag("getClipItemIds")
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/item/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("deleteClip success:", data.httpStatus)
      return data
    }
    console.log("deleteClip status", res.status)
    return null
  } catch (error) {
    console.log("deleteClip fail:", error)
  }
}

//좋아요 여러 개 취소
export async function deleteManyClips(itemIds: number[] | string[]) {
  revalidateTag("getClipItemIds")
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/items`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      body: JSON.stringify({
        itemIds: itemIds,
      }),
    })
    if (res.ok) {
      const data = await res.json()
      console.log("delete many clips success:", data.httpStatus)
      return data
    }
  } catch (error) {
    console.log("delete many clips fail:", error)
  }
}
