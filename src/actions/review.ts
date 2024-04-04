type ReviewIdsResponse = {
  reviews: number[]
  hasNext: boolean
}

export async function getItemReviewIds(
  itemCode: string,
): Promise<ReviewIdsResponse | null> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/item/${itemCode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemReviewIds success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemReviewIds fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemReviewIds fail:", error)
    return null
  }
}

export async function getItemAllReviewImages(itemCode: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/images/item/${itemCode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemReviewImages success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemReviewImages fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemReviewImages fail:", error)
    return null
  }
}

export async function getItemReview(reviewId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/content/${reviewId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemReview success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemReview fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemReview fail:", error)
    return null
  }
}

export async function getOneReviewImages(reviewId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/images/${reviewId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getReviewImages success:", data.httpStatus)
      return data.result
    } else {
      console.log("getReviewImages fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getReviewImages fail:", error)
    return null
  }
}
