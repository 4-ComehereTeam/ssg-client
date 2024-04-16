import Image from "next/image"
import {
  getItemBasicInfo,
  getItemBrand,
  getItemCalc,
  getItemThumbnail,
} from "@/actions/item"
import Link from "next/link"
import { getClip } from "@/actions/clip/itemClip"
import { SkeletonCard } from "../ui/SkeletonCard"
import ItemHeart from "./ItemHeart"
import { Skeleton } from "../ui/Skeleton"
import ItemCart from "./ItemCart"
import { getItemOptionExist } from "@/actions/itemOption"

interface ItemCardPropsType {
  itemId: number
}

export default async function ItemCard({ itemId }: ItemCardPropsType) {
  const thumbnail = await getItemThumbnail(itemId)
  const basicInfo = await getItemBasicInfo(itemId)
  const brand = await getItemBrand(itemId)
  const calc = await getItemCalc(itemId)
  const isCliped = await getClip(itemId)
  const optionExist = await getItemOptionExist(itemId)

  if (!thumbnail || !basicInfo || !calc) {
    return <SkeletonCard />
  }

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
    <div className="flex flex-col pt-2 pb-5">
      {thumbnail ? (
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
      ) : (
        <Skeleton className="h-[190px] w-[190px]" />
      )}
      <div className="flex flex-row justify-end items-center">
        <ItemHeart itemId={itemId} clicked={isCliped} />
        <ItemCart itemId={itemId} optionExist={optionExist} />
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
