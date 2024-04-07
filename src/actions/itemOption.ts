export type OptionExist = {
  itemId: number
  hasColor: boolean
  hasSize: boolean
  hasEtc: boolean
}

export type Options = {
  itemId: number
  superOptionId?: number
  options: {
    optionId: number
    id: number
    value: string
    stock: number
  }[]
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

export async function getItemOptionColor(
  itemId: string | number,
): Promise<Options | null> {
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

      const transformedData: Options = {
        itemId: data.result.itemId,
        options: data.result.colors.map((color: any) => ({
          optionId: color.optionId,
          id: color.colorId,
          value: color.value,
          stock: color.stock,
        })),
      }

      return transformedData
    } else {
      console.log("getItemOptionColor fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionColor fail(error):", error)
    return null
  }
}

export async function getItemOptionSize(
  itemId: string | number,
  colorId: number,
): Promise<Options | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/option/size/${itemId}?colorId=${colorId}`,
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
      const transformedData: Options = {
        itemId: data.result.itemId,
        superOptionId: data.result.colorId,
        options: data.result.sizes.map((size: any) => ({
          optionId: size.optionId,
          id: size.sizeId,
          value: size.value,
          stock: size.stock,
        })),
      }

      return transformedData
    } else {
      console.log("getItemOptionSize fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemOptionSize fail(error):", error)
    return null
  }
}

export async function getItemOptionEtc(
  itemId: string | number,
  colorId: number,
  sizeId: number,
): Promise<Options | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/option/etc/${itemId}?colorId=${colorId}&sizeId=${sizeId}`,
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
      const transformedData: Options = {
        itemId: data.result.itemId,
        superOptionId: data.result.sizeId,
        options: data.result.etcs.map((etc: any) => ({
          optionId: etc.optionId,
          id: etc.etcId,
          value: etc.value,
          stock: etc.stock,
        })),
      }

      return transformedData
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
