import ItemBasicInfo from "./ItemBasicInfo"
import ItemBrand from "./ItemBrand"
import ItemCalc from "./ItemCalc"

export type ItemIdType = {
  itemId: string
}

export default function ItemInfo({ itemId }: ItemIdType) {
  return (
    <section className="px-4 my-3.5">
      <ItemBrand itemId={itemId} />
      <ItemBasicInfo itemId={itemId} />
      <ItemCalc itemId={itemId} />
    </section>
  )
}
