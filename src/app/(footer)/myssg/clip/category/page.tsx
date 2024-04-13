import { getClipCategoryIds } from "@/actions/categoryClip"
import ClipCategoriesMain from "@/components/clip/category/ClipCategoriesMain"
import React from "react"

export default async function ClipCategoriesPage() {
  const clipCategoryIds = await getClipCategoryIds()
  return <ClipCategoriesMain clipCategories={clipCategoryIds} />
}
