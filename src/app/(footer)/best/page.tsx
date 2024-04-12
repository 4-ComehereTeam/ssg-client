import { getBigCategories } from "@/actions/category/category"
import BestItems from "@/components/best/BestItems"
import CategorySlideButton from "@/components/best/CategorySlideButton"
import TopNav from "@/components/TopNav"
import HeaderWithSearchBar from "@/components/ui/Headers/HeaderWithSearchBar"

export default async function page({
  searchParams,
}: {
  searchParams: { big: number }
}) {
  const bigCategoryData = await getBigCategories()
  const categoryId = searchParams.big ? searchParams.big : null
  return (
    <main>
      <HeaderWithSearchBar />
      <TopNav />
      {bigCategoryData && (
        <CategorySlideButton categories={bigCategoryData.bigCategories} />
      )}
      <BestItems categoryId={categoryId} />
    </main>
  )
}
