import Image from "next/image"
import * as React from "react"

interface ItemCardProps {
  thumbnailUrl: string
  alt: string
  itemName: string
  brand: string
  price: number
  //아래는 없어도 0으로 받음
  discountRate: number
  star: number
  totalReviews: number
  cardWidth?: string
  cardHeight?: string
}

export default function ItemCard({
  thumbnailUrl,
  alt,
  itemName,
  brand,
  price,
  discountRate,
  star,
  totalReviews,
  cardWidth = "w-36",
  cardHeight = "h-36",
}: ItemCardProps) {
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price
  const finalPrice = new Intl.NumberFormat().format(Math.round(discountPrice))
  const originalPrice = new Intl.NumberFormat().format(price)
  return (
    <div className={`flex flex-col pt-2 pb-5 ${cardWidth}`}>
      {/* <Image src={thumbnailUrl} alt={alt} width={cardWidth} /> */}
      <div className={`bg-violet-400 ${cardWidth} ${cardHeight}`}></div>
      <div className="flex flex-row justify-end w-full items-center">
        <button className="w-[28px] h-[28px]">
          <svg
            width="20px"
            viewBox="0 0 24 24"
            focusable="false"
            name="LikeIcon"
          >
            <path
              d="M12 21.288L4.06802 12.72C2.94002 11.496 2.40002 10.224 2.40002 8.84398C2.40002 5.95198 4.69202 3.59998 7.50002 3.59998C9.44402 3.59998 11.136 4.72798 12 6.38398C12.864 4.72798 14.556 3.59998 16.5 3.59998C19.308 3.59998 21.6 5.95198 21.6 8.84398C21.6 10.224 21.06 11.484 19.944 12.708L12 21.288ZM7.50002 4.79998C5.35202 4.79998 3.60002 6.61198 3.60002 8.84398C3.60002 9.92398 4.03202 10.896 4.94402 11.904L12 19.512L19.056 11.904C19.968 10.896 20.4 9.92398 20.4 8.84398C20.4 6.61198 18.648 4.79998 16.5 4.79998C14.352 4.79998 12.6 6.61198 12.6 8.84398H11.4C11.4 6.61198 9.64802 4.79998 7.50002 4.79998Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
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
        <p className="text-xs">
          <span className="font-extrabold">{brand} </span>
          {itemName}원
        </p>
      </div>
      <div className="w-full">
        {discountRate !== 0 && (
          <span className="text-xs line-through">{originalPrice}</span>
        )}
        <div className="text-base font-bold">
          <span className="text-[#FF5452]">{discountRate}%</span>
          <span className="ml-1">{finalPrice}원</span>
        </div>
        {star && totalReviews && (
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
            <span className="text-[#777777]">{star}</span>
            <div className="bg-[#E5E5E5] border w-0 h-[12px] mt-[3px]"></div>
            <span>{totalReviews}건</span>
          </div>
        )}
      </div>
    </div>
  )
}
