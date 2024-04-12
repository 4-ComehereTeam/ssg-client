import { getBigCategories } from "@/actions/category/category"
import CategorySection from "@/components/category/CategorySection"
import HeaderOfCategory from "@/components/ui/Headers/HeaderOfCategory"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import Loading from "../../loading"

export default async function CategoryPage() {
  const result = await getBigCategories()
  if (!result) {
    redirect("/not-found")
  }

  return (
    <main>
      <HeaderOfCategory />
      <h1 className="w-full h-[1.5px] bg-gradient-to-r from-rose-600 via-[#F13580] to-purple-600"></h1>
      <Suspense fallback={<Loading />}>
        <CategorySection bigCategoriesData={result} />
      </Suspense>
    </main>
  )
}
