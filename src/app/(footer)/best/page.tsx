import { getBigCategories } from "@/actions/category/category"
import BestItems from "@/components/best/BestItems"
import CategorySlideButton from "@/components/best/CategorySlideButton"
import TopNav from "@/components/main/TopNav"
import HeaderWithSearchBar from "@/components/ui/Headers/HeaderWithSearchBar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "랭킹, 믿고 사는 즐거움 SSG.COM",
  description: "카테고리별 베스트 상품",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

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
      <TopNav index="베스트" />
      {bigCategoryData && (
        <CategorySlideButton categories={bigCategoryData.bigCategories} />
      )}
      <BestItems categoryId={categoryId} />
    </main>
  )
}
