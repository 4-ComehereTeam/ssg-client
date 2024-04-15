"use server"

export type CategoryItemsData = {
  itemIds: number[]
  currentPage: number
  hasNext: boolean
}

export async function getCategoryItems(
  bigCategoryId: number | string | null,
  middleCategoryId: number | string | null,
  smallCategoryId: number | string | null,
  size?: number | string | null,
  page?: number | string | null,
): Promise<CategoryItemsData | null> {
  let path = ""
  if (bigCategoryId) {
    path = `bigCategoryId=${bigCategoryId}`
  }
  if (middleCategoryId) {
    path = `bigCategoryId=${bigCategoryId}&middleCategoryId=${middleCategoryId}`
  }
  if (smallCategoryId) {
    path = `bigCategoryId=${bigCategoryId}&middleCategoryId=${middleCategoryId}&smallCategoryId=${smallCategoryId}`
  }
  if (size) {
    path += `&size=${size}`
  }
  if (page) {
    path += `&page=${page}`
  }
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/items?${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log("getCategoryItems success:", data.httpStatus)
    return data.result
  } catch (error) {
    console.log("getCategoryItems error:", error)
    return null
  }
}

export async function getCategoryItemsCount(
  bigCategoryId: number | null,
  middleCategoryId: number | null,
  smallCategoryId: number | null,
): Promise<{ count: number } | null> {
  let path = ""
  if (bigCategoryId) {
    path = `bigCategoryId=${bigCategoryId}`
  }
  if (middleCategoryId) {
    path = `bigCategoryId=${bigCategoryId}&middleCategoryId=${middleCategoryId}`
  }
  if (smallCategoryId) {
    path = `bigCategoryId=${bigCategoryId}&middleCategoryId=${middleCategoryId}&smallCategoryId=${smallCategoryId}`
  }
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/items/count?${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log("getCategoryItemsCount success:", data.httpStatus)
    return data.result
  } catch (error) {
    console.log("getCategoryItemsCount error:", error)
    return null
  }
}
