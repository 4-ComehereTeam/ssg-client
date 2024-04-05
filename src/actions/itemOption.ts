export type OptionExist = {
  itemId: number
  hasColor: boolean
  hasSize: boolean
  hasEtc: boolean
}

export async function getItemOptionExist(
  itemId: string | number,
): Promise<OptionExist | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/options/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemOptionExist success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemOptionExist fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionExist fail(error):", error)
    return null
  }
}

export type Color = {
  itemId: number
  colors: {
    optionId: number
    colorId: number
    value: string
    stock: number
  }[]
}

export async function getItemOptionColor(
  itemId: string | number,
): Promise<Color | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/option/color/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemOptionColor success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemOptionColor fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionColor fail(error):", error)
    return null
  }
}

export type Size = {
  itemId: number
  colorId: number
  sizes: {
    optionId: number
    sizeId: number
    value: string
    stock: number
  }[]
}

export async function getItemOptionSize(
  itemId: string | number,
): Promise<Size | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/option/size/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemOptionSize success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemOptionSize fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionSize fail(error):", error)
    return null
  }
}

export type Etc = {
  itemId: number
  sizeId: number
  etcs: {
    optionId: number
    etcId: number
    value: string
    stock: number
  }[]
}

export async function getItemOptionEtc(
  itemId: string | number,
): Promise<Etc | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/option/etc/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemOptionEtc success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemOptionEtc fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionEtc fail(error):", error)
    return null
  }
}

export type ItemOption = {
  itemOptionId: number
  color: string | null
  size: string | null
  etc: string | null
}

export async function getItemOption(
  optionId: string | number,
): Promise<ItemOption | null> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/option/${optionId}`, {
      cache: "force-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const data = await res.json()
      console.log("getItemOption success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemOption fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOption fail(error):", error)
    return null
  }
}
