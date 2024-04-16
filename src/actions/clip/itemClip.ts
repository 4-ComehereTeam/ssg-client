"use server"

import { getSession } from "@/lib/getSession"
import { revalidateTag } from "next/cache"

export async function getClipItemIds(): Promise<number[]> {
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      next: { tags: ["getClipItemIds"] },
    })

    const data = await res.json()
    return data.result.itemIds
  } catch (error) {
    return []
  }
}

export async function getClip(itemId: number | string): Promise<boolean> {
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
    const data = await res.json()
    return data.result.isCliped
  } catch (error) {
    return false
  }
}

export async function postClip(itemId: number | string) {
  revalidateTag("getClipItemIds")
  const session = await getSession()
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
      return
    }
    return null
  } catch (error) {
    return null
  }
}

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
      return data.isSuccess
    }
    return null
  } catch (error) {
    return null
  }
}

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
      return data.isSuccess
    }
  } catch (error) {
    return null
  }
}
