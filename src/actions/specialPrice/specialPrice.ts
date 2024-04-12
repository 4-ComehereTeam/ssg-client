"use server"

type SpecialPrice = {
  bundles: number[]
  currentPage: number
  hasNext: boolean
}

export async function getSpecialPrice(): Promise<SpecialPrice | false> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/bundle`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPrice success:", data.httpStatus)
      return data.result
    }
    console.log("getSpecialPrice fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPrice fail:", error)
    return false
  }
}

export async function getSpecialPriceInfo(bundleID: number) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/bundle/${bundleID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPriceInfo success:", data.httpStatus)
      return data.result
    }
    console.log("getSpecialPriceInfo fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPriceInfo fail:", error)
    return false
  }
}

export async function getSpecialPriceDetail(bundleID: number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/bundle/item/${bundleID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log("getSpecialPriceDetail success:", data.httpStatus)
      return data.result
    }
    console.log("getSpecialPriceDetail fail", res.status)
    return false
  } catch (error) {
    console.log("getSpecialPriceDetail fail:", error)
    return false
  }
}
