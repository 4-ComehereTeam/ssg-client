'use server'

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache"

async function getSession() {
  const session = await getServerSession(options)
  return session
}

export async function getSpecialPrice() {
  revalidateTag("getSpecialPrice")
  const session = await getSession();
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/bundle`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPrice success:", data)
      return data.result
    }
    console.log("getSpecialPrice fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPrice fail:", error)
    return false
  }
}

export async function getSpecialPriceInfo(bundleID : number) {
  revalidateTag("getSpecialPriceInfo")
  const session = await getSession();
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/bundle/${bundleID}`, {
      
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPriceInfo success:", data)
      return data.result
    }
    console.log("getSpecialPriceInfo fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPriceInfo fail:", error)
    return false
  }
}

export async function getSpecialPriceDetail(bundleID : number) {
  revalidateTag("getSpecialPriceDetail")
  const session = await getSession();
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/bundle/item/${bundleID}`, {
      
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPriceDetail success:", data)
      return data.result
    }
    console.log("getSpecialPriceDetail fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPriceDetail fail:", error)
    return false
  }
}