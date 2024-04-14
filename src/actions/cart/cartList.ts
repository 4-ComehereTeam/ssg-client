'use server'

import { getSession } from "@/lib/getSession"

export async function getCartList() {

  const session = await getSession()
  console.log("session >>", session);
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cart/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })
    console.log("res >>", res);
    if (res.ok) {
      const data = await res.json()
      console.log("getCartList success:", data.httpStatus)
      return data.result
    }
    console.log("getCartList status", res.status)
    return null
  } catch (error) {
    console.log("getCartList fail:", error)
    return false
  }
}