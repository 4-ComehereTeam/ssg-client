import { getClipCategoryIds } from "@/actions/clip/categoryClip"
import ClipCategoriesMain from "@/components/clip/category/ClipCategoriesMain"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "관심 카테고리, 믿고 사는 즐거움 SSG.COM",
  description: "관심 카테고리, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default async function ClipCategoriesPage() {
  const clipCategoryIds = await getClipCategoryIds()
  return <ClipCategoriesMain clipCategories={clipCategoryIds} />
}
