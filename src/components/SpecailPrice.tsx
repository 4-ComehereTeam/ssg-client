import { getSpecialPrice } from "@/actions/specialPrice/specialPrice"
import SpecialCard from "./SpecialCard"

export default async function SpecailPrice() {
  const data = await getSpecialPrice()

  return (
    <div>
      {data &&
        data.bundles.map((item: number, index: number) => (
          <SpecialCard itemId={item} key={index} />
        ))}
    </div>
  )
}
