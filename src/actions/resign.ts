"use server"

import { getSession } from "@/lib/getSession"

export async function resign() {
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/members/resign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })
    const data = await res.json()
    if (data.isSuccess) {
      return true
    } else {
      throw data
    }
  } catch (error) {
    return false
  }
}
