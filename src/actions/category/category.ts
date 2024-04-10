export type BigCategoriesData = {
  count: number
  bigCategories: BigCategories
}

export type BigCategories = {
  id: number
  name: string
}[]

export async function getBigCategories(): Promise<BigCategoriesData | null> {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getBigCategories success:", data.httpStatus)
      return data.result
    }
    return null
  } catch (error) {
    console.log("getBigCategories fail:", error)
    return null
  }
}

export type MiddleCategoriesData = {
  bigCategoryId: number
  middleCategories: MiddleCategories
}

export type MiddleCategories = {
  id: number
  name: string
}[]

export async function getMiddleCategories(
  bigCtegoryId: number,
): Promise<MiddleCategoriesData | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/middle/${bigCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log("getMiddleCategories success:", data.httpStatus)
      return data.result
    }
    return null
  } catch (error) {
    console.log("getMiddleCategories fail:", error)
    return null
  }
}

export type SmallCategoriesData = {
  middleCategoryId: number
  smallCategories: SmallCategories
}

export type SmallCategories = {
  id: number
  name: string
}[]

export async function getSmallCategories(
  middleCtegoryId: number,
): Promise<SmallCategoriesData | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/small/${middleCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log("getSmallCategories success:", data.httpStatus)
      return data.result
    }
    return null
  } catch (error) {
    console.log("getSmallCategories fail:", error)
    return null
  }
}

export type DetailCategoriesData = {
  smallCategoryId: number
  detailCategories: DetailCategories
}

export type DetailCategories = {
  id: number
  name: string
}[]

export async function getDetailCategories(
  smallCtegoryId: number,
): Promise<DetailCategoriesData | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories/detail/${smallCtegoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log("getDetailCategories success:", data.httpStatus)
      return data.result
    }
    return null
  } catch (error) {
    console.log("getDetailCategories fail:", error)
    return null
  }
}
