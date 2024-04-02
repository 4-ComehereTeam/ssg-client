import { getItemImages } from "@/actions/item"
import ItemDescription from "@/components/item/ItemDescription"
import ItemImage from "@/components/item/ItemImage"
import ItemInfo from "@/components/item/ItemInfo"
import ReviewCntOfItem from "@/components/item/ReviewCntOfItem"
import HeaderOfItem from "@/components/ui/Headers/HeaderOfItem"

export default async function ItemDetailPage({
  params,
}: {
  params: { itemId: string }
}) {
  const itemImages = await getItemImages(params.itemId)
  return (
    <main>
      <HeaderOfItem>
        <ReviewCntOfItem itemId={params.itemId} />
      </HeaderOfItem>
      <ItemImage images={itemImages.itemImages} />
      <ItemInfo itemId={params.itemId} />
      <div className=" bg-[#F5F5F5] h-4 mb-2 mt-4"></div>
      <ItemDescription itemId={params.itemId} />
    </main>
  )
}
