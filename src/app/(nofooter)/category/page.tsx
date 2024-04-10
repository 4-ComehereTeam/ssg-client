import { getBigCategories } from "@/actions/category/category"
import CategoryTable from "@/components/category/CategoryTable"
import { redirect } from "next/navigation"

export default async function CategoryPage() {
  const result = await getBigCategories()
  if (!result) {
    redirect("/not-found")
  }
  return <CategoryTable bigCategoriesData={result} />
}
