import Image from "next/image"
import {
  getItemBasicInfo,
  getItemBrand,
  getItemCalc,
  getItemThumbnail,
} from "@/actions/item"
import Link from "next/link"
import Heart from "./Heart"
import { getClip } from "@/actions/clip"

interface ItemCardPropsType {
  itemId: number
}

export default async function ItemCard({ itemId }: ItemCardPropsType) {
  const thumbnail = await getItemThumbnail(itemId)
  const basicInfo = await getItemBasicInfo(itemId)
  const brand = await getItemBrand(itemId)
  const calc = await getItemCalc(itemId)
  const isCliped = await getClip(itemId)

  const itemName = basicInfo ? basicInfo.itemName : ""
  const discountRate = basicInfo ? basicInfo.discountRate : 0
  const price = basicInfo ? basicInfo.price : 0
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price
  const finalPrice = new Intl.NumberFormat().format(Math.round(discountPrice))
  const originalPrice = new Intl.NumberFormat().format(price)

  const averageStar = calc ? calc.averageStar : 0
  const reviewCount = calc ? calc.reviewCount : 0

  return (
    <div className={`flex flex-col pt-2 pb-5 w-full h-full`}>
      <Link href={`/item/${itemId}`}>
        <Image
          src={thumbnail.url}
          alt={`${itemId}-${thumbnail.alt}`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          width={0}
          height={0}
          priority
        />
      </Link>
      <div className="flex flex-row justify-end items-center">
        <Heart itemId={itemId} clicked={isCliped} />
        {/* 장바구니 담는 서버액션을 장바구니 컴포넌트로 분리 */}
        <button className="w-[28px] h-[28px]">
          <svg
            width="20px"
            viewBox="0 0 24 24"
            focusable="false"
            name="CartIcon"
          >
            <rect
              x="6"
              y="8.40002"
              width="14.4"
              height="1.2"
              fill="currentColor"
            ></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
              fill="currentColor"
            ></path>
            <path
              d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <p
          className="text-xs"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          <span className="font-extrabold">{brand && brand.name} </span>
          {itemName}
        </p>
      </div>
      <div className="w-full">
        {discountRate !== 0 && (
          <span className="text-xs line-through">{originalPrice}원</span>
        )}
        <div className="text-base font-semibold">
          {discountRate !== 0 && (
            <span className="text-[#FF5452]">{discountRate}%</span>
          )}
          <span className="ml-1">{finalPrice}원</span>
        </div>
        {averageStar !== 0 && reviewCount !== 0 && (
          <div className="flex flex-row gap-1 text-xs">
            <svg
              width={11}
              viewBox="0 0 11 16"
              focusable="false"
              name="StarFill"
            >
              <path
                fill="#CFCFCF"
                d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
              ></path>
            </svg>
            <span className="text-[#777777]">{averageStar}</span>
            <div className="bg-[#E5E5E5] border w-0 h-[12px] mt-[3px]"></div>
            <span>{reviewCount}건</span>
          </div>
        )}
      </div>
    </div>
  )
}
