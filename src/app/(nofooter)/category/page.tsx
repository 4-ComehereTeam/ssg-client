import { getBigCategories } from "@/actions/category/category"
import CategorySection from "@/components/category/CategorySection"
import { redirect } from "next/navigation"

export default async function CategoryPage() {
  const result = await getBigCategories()
  if (!result) {
    redirect("/not-found")
  }
  return <CategorySection bigCategoriesData={result} />
}
