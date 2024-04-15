"use server"

import { getSession } from "@/lib/getSession"

export async function cartAdd(
  itemId: number | string | null,
  itemOptionId: number | string | null,
  itemCount: number | string | null,
) {
  const session = await getSession()
  console.log("cart add:", itemId, itemOptionId, itemCount)
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      body: JSON.stringify({
        itemId: itemId,
        itemOptionId: itemOptionId,
        itemCount: itemCount,
      }),
    })
    const data = await res.json()
    console.log("cartAdd success:", data)
  } catch (error) {
    console.log("cartAdd fail:", error)
  }
}
