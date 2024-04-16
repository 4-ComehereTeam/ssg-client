import { getBigCategories } from "@/actions/category/category"
import CategorySection from "@/components/category/CategorySection"
import HeaderOfCategory from "@/components/ui/Headers/HeaderOfCategory"
import { redirect } from "next/navigation"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/Skeleton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "전체 카테고리, 믿고 사는 즐거움 SSG.COM",
  description: "전체 카테고리, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default async function CategoryPage() {
  const result = await getBigCategories()
  if (!result) {
    redirect("/not-found")
  }

  return (
    <main>
      <HeaderOfCategory />
      <h1 className="w-full h-[1.5px] bg-gradient-to-r from-rose-600 via-[#F13580] to-purple-600"></h1>
      <Suspense fallback={<Skeleton className="w-fit h-fit" />}>
        <CategorySection bigCategoriesData={result} />
      </Suspense>
    </main>
  )
}
