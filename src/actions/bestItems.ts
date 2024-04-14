"use server"

export type BestItemsData = {
  items: number[]
}

export async function getBestItems(
  categoryId: number | string | null,
): Promise<BestItemsData | null> {
  let path = ""
  if (categoryId && Number(categoryId) > 0) {
    path = `bigCategoryId=${categoryId}`
  }
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/items/best?${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    console.log("getBestItems success:", data.httpStatus)
    return data.result
  } catch (error) {
    console.log("getBestItems error:", error)
    return null
  }
}
