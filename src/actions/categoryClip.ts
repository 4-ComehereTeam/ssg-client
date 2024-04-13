"use server"

import { getSession } from "@/lib/getSession"
import { revalidateTag } from "next/cache"

export type ClipCategoryIds = ClipCategoryId[]

export type ClipCategoryId = {
  bigCategoryId: number
  middleCategoryId: number | null | undefined
  smallCategoryId: number | null | undefined
}

export async function getClipCategoryIds(): Promise<ClipCategoryIds | []> {
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      next: { tags: ["getClipCategoryIds"] },
    })

    const data = await res.json()
    if (data.isSuccess) {
      console.log("getClipCategoryIds success", data.httpStatus)
    }
    return data.result.categoryClip
  } catch (error) {
    console.log("getClipCategoryIds error", error)
    return []
  }
}

export async function getIsClipedCategory(
  categoryId: ClipCategoryId,
): Promise<boolean> {
  revalidateTag("getClipCategoryIds")
  let path = `bigCategoryId=${categoryId.bigCategoryId}`
  if (categoryId.middleCategoryId) {
    path = `bigCategoryId=${categoryId.bigCategoryId}&middleCategoryId=${categoryId.middleCategoryId}`
  }
  if (categoryId.smallCategoryId) {
    path = `bigCategoryId=${categoryId.bigCategoryId}&middleCategoryId=${categoryId.middleCategoryId}&smallCategoryId=${categoryId.smallCategoryId}`
  }
  const session = await getSession()
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/clip/category?${path}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: session ? session.user.accessToken : null,
        },
      },
    )
    const data = await res.json()
    if (data.isSuccess) {
      console.log("getIsClipedCategory success", data.httpStatus)
    } else {
      throw data
    }
    return data.result
  } catch (error) {
    console.log("getIsClipedCategory error", error)
    return false
  }
}

export async function postClipCategory(categoryId: ClipCategoryId) {
  revalidateTag("getClipCategoryIds")
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      body: JSON.stringify({
        bigCategoryId: categoryId.bigCategoryId,
        middleCategoryId: categoryId.middleCategoryId,
        smallCategoryId: categoryId.smallCategoryId,
      }),
    })
    const data = await res.json()
    if (data.isSuccess) {
      console.log("postClipCategory success:", data.httpStatus)
    } else {
      throw data
    }
  } catch (error) {
    console.log("postClipCategory fail:", error)
  }
}

export async function deleteClipCategories(categoryClipIds: ClipCategoryIds) {
  revalidateTag("getClipCategoryIds")
  const session = await getSession()
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/categories`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: session ? session.user.accessToken : null,
      },
      body: JSON.stringify({
        categoryClipIds: categoryClipIds,
      }),
    })
    if (res.ok) {
      const data = await res.json()
      console.log("deleteClipCategories success:", data.httpStatus)
      return data
    }
  } catch (error) {
    console.log("deleteClipCategories fail:", error)
  }
}
