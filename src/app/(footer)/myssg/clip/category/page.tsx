import { getClipCategoryIds } from "@/actions/clip/categoryClip"
import ClipCategoriesMain from "@/components/clip/category/ClipCategoriesMain"

export default async function ClipCategoriesPage() {
  const clipCategoryIds = await getClipCategoryIds()
  return <ClipCategoriesMain clipCategories={clipCategoryIds} />
}
