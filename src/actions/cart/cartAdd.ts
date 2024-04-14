import { getSession } from "@/lib/getSession"

export async function cartAdd(itemId: number | string | null, itemOptionId : number | string | null, itemCount : number | string | null) {
  // const session = await getSession()
  try {
    const res = await fetch(`/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: session ? session.user.accessToken : null,
      },
      body : JSON.stringify({
        itemId : itemId,
        itemOptionId : itemOptionId,
        itemCount : itemCount
      })
    })
    if (res.ok) {
      const data = await res.json()
      console.log("cartAdd success:", data.httpStatus)
    }
    console.log("cartAdd status", res.status)
    return null
  } catch (error) {
    console.log("cartAdd fail:", error)
  }
}