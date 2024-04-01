"use server"

export async function getItemBasicInfo(itemId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/detail/${itemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemBasicInfo success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemBasicInfo fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemBasicInfo fail:", error)
    return null
  }
}

export async function getItemDescription(itemId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/description/${itemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemDescription success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemDescription fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemDescription fail:", error)
    return null
  }
}

export async function getItemCalc(itemId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/calc/${itemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemCalc success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemCalc fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemCalc fail:", error)
    return null
  }
}

export async function getItemBrand(itemId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/brand/${itemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemBrand success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemBrand fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemBrand fail:", error)
    return null
  }
}

export async function getItemImages(itemId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/images/${itemId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemImages success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemImages fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemImages fail:", error)
    return null
  }
}
