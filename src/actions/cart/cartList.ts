"use server"

import { getSession } from "@/lib/getSession"

export type CartListType = {
  itemOptions: CartItemType[]
}

export type CartItemType = {
  itemId: number
  itemOptionId: number
  itemCount: number
  pinStatus: boolean
  itemCheck: boolean
}

export async function getCartList(): Promise<CartListType | null> {
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cart/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })
    const data = await res.json()
    if (res.ok) {
      console.log("getCartList success:", data)
      return data.result
    }
    throw data
  } catch (error) {
    console.log("getCartList fail:", error)
    return null
  }
}
