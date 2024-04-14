import { getClipCategoryIds } from "@/actions/clip/categoryClip"
import { getClipItemIds } from "@/actions/clip/itemClip"
import ClipHeader from "@/components/clip/ClipHeader"
import ClipNavbar from "@/components/clip/ClipNavbar"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const itemIds = await getClipItemIds()
  const clipCategoryIds = await getClipCategoryIds()
  return (
    <>
      <HeaderToBackNotSticky title="좋아요" />
      <ClipHeader />
      <ClipNavbar
        clipNums={itemIds.length}
        categoryNums={clipCategoryIds.length}
      />
      {children}
    </>
  )
}
