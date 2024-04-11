export type CategoryItems = {}

export async function getCategoryItems(smallCtegoryId: number) {
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
