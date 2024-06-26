"use server"

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
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export async function getItemAllReviewImages(itemCode: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/images/item/${itemCode}`,
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export async function getItemReview(reviewId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/content/${reviewId}`,
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export async function getOneReviewImages(reviewId: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/review/images/${reviewId}`,
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
