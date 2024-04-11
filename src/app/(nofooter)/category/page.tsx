import { getBigCategories } from "@/actions/category/category"
import CategorySection from "@/components/category/CategorySection"
import HeaderOfCategory from "@/components/ui/Headers/HeaderOfCategory"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function CategoryPage() {
  const result = await getBigCategories()
  if (!result) {
    redirect("/not-found")
  }

  return (
    <main>
      <HeaderOfCategory />
      <h1 className="w-full h-[1.5px] bg-gradient-to-r from-rose-600 via-[#F13580] to-purple-600"></h1>
      <CategorySection bigCategoriesData={result} />
    </main>
  )
}
