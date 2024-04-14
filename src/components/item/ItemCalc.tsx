import Image from "next/image"
import Link from "next/link"
import { ItemIdType } from "./ItemInfo"
import { getItemCalc } from "@/actions/item"

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
        <span className="px-1 font-extrabold">{calc.averageStar}</span>
        <Link href={`/review/${1}`} className="ml-5 underline decoration-1">
          {calc.reviewCount}건 리뷰
        </Link>
        <Image
          width="16"
          height="16"
          src="https://img.icons8.com/sf-ultralight-filled/25/000000/back.png"
          alt="리뷰"
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </div>
    )
  }
}
