import { getClip } from "@/actions/clip"
import { getItemImages } from "@/actions/item"
import {
  getItemOptionColor,
  getItemOptionEtc,
  getItemOptionExist,
  getItemOptionSize,
} from "@/actions/itemOption"
import ItemBottomBar from "@/components/item/ItemBottomBar"
import ItemDescription from "@/components/item/ItemDescription"
import ItemImage from "@/components/item/ItemImage"
import ItemInfo from "@/components/item/ItemInfo"
import ReviewCntOfItem from "@/components/item/review/ReviewCntOfItem"
import ReviewContainer from "@/components/item/review/ReviewContainer"
import HeaderOfItem from "@/components/ui/Headers/HeaderOfItem"

export default async function ItemDetailPage({
  params,
}: {
  params: { itemId: string }
}) {
  const itemImages = await getItemImages(params.itemId)
  const isCliped: boolean = await getClip(params.itemId)
  const optionExist = await getItemOptionExist(params.itemId)
  let colors = null
  if (optionExist?.hasColor) {
    colors = await getItemOptionColor(params.itemId)
  }
  let sizes = null
  if (optionExist?.hasSize) {
    sizes = await getItemOptionSize(params.itemId)
  }
  let etcs = null
  if (optionExist?.hasEtc) {
    etcs = await getItemOptionEtc(params.itemId)
  }

  return (
    <main>
      <HeaderOfItem>
        <ReviewCntOfItem itemId={params.itemId} />
      </HeaderOfItem>
      <ItemImage images={itemImages.itemImages} />
      <ItemInfo itemId={params.itemId} />
      <div className=" bg-[#F5F5F5] h-4 mb-2 mt-4"></div>
      <ItemDescription itemId={params.itemId} />
      <ReviewContainer itemId={params.itemId} />
      <ItemBottomBar
        itemId={params.itemId}
        isCliped={isCliped}
        colors={colors}
        sizes={sizes}
        etcs={etcs}
      />
    </main>
  )
}
