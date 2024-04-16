"use server"

import { getSession } from "@/lib/getSession"
import { revalidateTag } from "next/cache"

export type ClipCategoryIds = ClipCategoryId[]

export type ClipCategoryId = {
  id: number
  bigCategoryId: number
  middleCategoryId: number | null | undefined
  smallCategoryId: number | null | undefined
}

export type NoneIdClipCategoryId = {
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
    return data.result.categoryClip
  } catch (error) {
    return []
  }
}

export type IsClipedCategory = {
  id: number
  isCliped: boolean
}

export async function getIsClipedCategory(
  categoryId: NoneIdClipCategoryId,
): Promise<IsClipedCategory | null> {
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
    if (!data.isSuccess) {
      throw data
    }
    return data.result
  } catch (error) {
    return null
  }
}

export async function postClipCategory(categoryId: NoneIdClipCategoryId) {
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
    if (!data.isSuccess) {
      throw data
    }
  } catch (error) {
    return
  }
}

export async function deleteClipCategories(
  categoryClipIds: NoneIdClipCategoryId[],
) {
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
      return data.isSuccess
    }
  } catch (error) {
    return
  }
}
