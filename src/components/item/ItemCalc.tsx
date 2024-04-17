import Image from "next/image"
import { ItemIdType } from "./ItemInfo"
import { getItemCalc } from "@/actions/item"
import Separator from "../ui/Separator"

export type ItemCalcProps = {
  calc: {
    reviewCount: number
    averageStar: number
  }
}

export default async function ItemCalc({ itemId }: ItemIdType) {
  const calc = await getItemCalc(itemId)
  if (calc) {
    return (
      <div className="mt-8 flex flex-row items-center">
        <div>
          <Image
            width="16"
            height="16"
            src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
            alt="별점"
          />
        </div>
        <span className="pl-1 pr-3 font-extrabold">{calc.averageStar}</span>
        <Separator className="w-[1px]" />
        <span className="ml-3">{calc.reviewCount}건 리뷰</span>
      </div>
    )
  }
}
