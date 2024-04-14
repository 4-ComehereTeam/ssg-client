'use server'

import { getSession } from "@/lib/getSession"

export async function getAddressList() {
  const session = await getSession()

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/address/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getAddressList success:", data.httpStatus)
      return data.result
    }
  } catch (error) {
    console.log("getAddressList fail:", error)
    return false
  }
}
