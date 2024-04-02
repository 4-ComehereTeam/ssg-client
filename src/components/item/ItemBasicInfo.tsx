import Image from "next/image"
import { ItemIdType } from "./ItemInfo"
import { getItemBasicInfo } from "@/actions/item"

export default async function ItemBasicInfo({ itemId }: ItemIdType) {
  const basicInfo = await getItemBasicInfo(itemId)

  const discountPrice =
    basicInfo.discountRate !== 0
      ? basicInfo.price * ((100 - basicInfo.discountRate) / 100)
      : basicInfo.price
  const finalPrice = new Intl.NumberFormat().format(Math.round(discountPrice))
  const originalPrice = new Intl.NumberFormat().format(basicInfo.price)
  return (
    <div>
      <div className="flex flex-col gap-5 mb-2">
        <div className="whitespace-pre-line">{basicInfo.itemName}</div>
        <div className="flex flex-col">
          {basicInfo.discountRate !== 1 && (
            <span className="line-through text-[#777777]">
              {originalPrice}원
            </span>
          )}
          <p>
            {basicInfo.discountRate !== 1 && (
              <span className="pr-2 text-[#FF5452] text-[25px] font-extrabold">
                {basicInfo.discountRate}%
              </span>
            )}
            <span className="text-[26px] font-extrabold">{finalPrice}원</span>
          </p>
        </div>
      </div>
      <Image
        src={
          "https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png&w=750"
        }
        alt="유니버스클럽"
        width={1000}
        height={1000}
        sizes="100vw"
      />
    </div>
  )
}
