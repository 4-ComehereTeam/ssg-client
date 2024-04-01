import {
  getItemBasicInfo,
  getItemBrand,
  getItemCalc,
  getItemDescription,
  getItemImages,
} from "@/actions/item"
import ItemBasicInfo from "@/components/item/ItemBasicInfo"
import ItemBrand from "@/components/item/ItemBrand"
import ItemCalc from "@/components/item/ItemCalc"
import ItemDescription from "@/components/item/ItemDescription"
import ItemImage from "@/components/item/ItemImage"

export default async function ItemDetailPage({
  params,
}: {
  params: { itemId: string }
}) {
  const itemBasicInfo = await getItemBasicInfo(params.itemId)
  const itemDescription = await getItemDescription(params.itemId)
  const itemCalc = await getItemCalc(params.itemId)
  const itemBrand = await getItemBrand(params.itemId)
  const itemImages = await getItemImages(params.itemId)
  console.log(itemImages)
  return (
    <main>
      <ItemImage images={itemImages.itemImages} />
      <ItemBrand brand={itemBrand} />
      <ItemBasicInfo basicInfo={itemBasicInfo} />
      <ItemCalc calc={itemCalc} />
      <ItemDescription description={itemDescription} />
    </main>
  )
}
