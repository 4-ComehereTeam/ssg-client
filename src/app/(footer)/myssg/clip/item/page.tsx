import { getClipItemIds } from "@/actions/clip/itemClip"
import ClipMain from "@/components/clip/item/ClipMain"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "관심 상품, 믿고 사는 즐거움 SSG.COM",
  description: "관심 상품, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default async function ClipItemsPage() {
  const itemIds = await getClipItemIds()

  return <ClipMain itemIds={itemIds} />
}
