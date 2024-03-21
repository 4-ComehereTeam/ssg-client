import Image from "next/image"
import * as React from "react"

interface ItemCardProps {
  imageUrl?: string
  iconUrl?: string
  badgeNumber?: string
  productImageUrl?: string
  productName?: string
  originalPrice?: string
  discountPercentage?: number
  discountedPrice?: string
  rating?: number
  totalReviews?: string
  isGuaranteedFresh?: boolean
}

export default function ItemCard({
  imageUrl,
  iconUrl,
  badgeNumber,
  productImageUrl,
  productName,
  originalPrice,
  discountPercentage,
  discountedPrice,
  rating,
  totalReviews,
  isGuaranteedFresh,
}: ItemCardProps) {
  return (
    <article className="flex flex-col w-[25%]">
      <div className="flex overflow-hidden relative flex-col gap-0 items-start pb-20 pl-20 text-xs leading-3 text-center whitespace-nowrap aspect-square">
        {/* <Image src={imageUrl} alt="썸네일" width={300} /> */}
        <div>하트, 장바구니</div>
        <div className="relative justify-center items-center w-5 h-5 bg-stone-500">
          {badgeNumber}
        </div>
      </div>

      <h3 className="mt-3.5 w-full text-sm text-neutral-800">{productName}</h3>
      <p className="mt-1.5 w-full text-xs text-neutral-400">{originalPrice}</p>
      <div className="mt-1.5 w-full text-base font-semibold text-black">
        {discountPercentage}%{" "}
        <span className="text-black">{discountedPrice}</span>
      </div>
      <div className="flex gap-1 mt-1.5 text-xs whitespace-nowrap text-neutral-500">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e67fd611d92cd49cc52905d0d88f731619d46447529ac185b379343e81e8b2e0?apiKey=728ab64874b9457aabdcf41866c4ead0&"
          alt=""
          className="shrink-0 aspect-[0.79] w-[11px]"
        />
        <p className="my-auto">{rating}</p>
        <div
          className="shrink-0 self-start w-px bg-zinc-300 h-[11px]"
          aria-hidden="true"
        />
        <p>{totalReviews}</p>
      </div>
      {isGuaranteedFresh && (
        <div className="justify-center px-1.5 py-1.5 mt-1.5 text-xs whitespace-nowrap bg-neutral-100 text-neutral-700">
          신선보장
        </div>
      )}
    </article>
  )
}
