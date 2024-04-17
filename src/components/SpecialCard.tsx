import { getSpecialPriceInfo } from "@/actions/specialPrice/specialPrice"
import SpecialProduct from "./SpecailProduct"

export default async function SpecialCard({ itemId }: { itemId: number }) {
  const data = await getSpecialPriceInfo(itemId)

  return (
    <SpecialProduct
      name={data.name}
      brand={""}
      subtitle={""}
      price={data.minPrice}
      id={data.bundleId}
      src={`/SpecialPrice/${data.bundleId}`}
      store={null}
      sale={null}
      salePrice={null}
      reviewRating={0}
      reviewCount={0}
      imageUrl={data.imageUrl}
      alt={data.alt}
    />
  )
}
