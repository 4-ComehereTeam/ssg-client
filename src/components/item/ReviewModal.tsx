"use client"

import Image from "next/image"
import Separator from "../ui/Separator"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Review, ReviewImages } from "./TotalReview"

type ReviewModalProps = {
  review: Review
  reviewImages: ReviewImages
}

export default function ReviewModal({
  review,
  reviewImages,
}: ReviewModalProps) {
  const coverSigninId =
    review.signinId.substring(0, 3) + "*".repeat(review.signinId.length - 3)

  const date = new Date(review.createAt)

  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`
  return (
    <div className="absolute w-full h-full bottom-[90%]">
      <Swiper
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        navigation={true}
      >
        {reviewImages.images.map((image) => (
          <SwiperSlide key={image.imageId} className="px-4">
            <Image
              src={image.url}
              alt={image.alt}
              width={0}
              height={0}
              sizes="100vw"
              // fill
              style={{ width: "100%", height: "100%" }}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-[50%] translate-x-[-50%] w-14 z-10 text-xs bg-black px-1 py-1  bg-opacity-20 rounded-full text-center">
        <div className="swiper-pagination"></div>
      </div>
      <div>
        <div className="flex flex-row items-center gap-1">
          <div className="w-3 h-3">
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
              alt="별점"
            />
          </div>
          <span className="text-xs">{review.star}</span>
          <Separator className="w-[1px]" height="[10px]" />
          <span className="text-[11px] text-[#969696]">{formattedDate}</span>
          {review.updateAt && (
            <>
              <Separator className="w-[1px]" height="[10px]" />
              <span className="text-[11px] text-[#969696]">
                {review.updateAt}
              </span>
            </>
          )}
          <Separator className="w-[1px]" height="[10px]" />
          <span className="text-[11px] text-[#969696]">{coverSigninId}</span>
        </div>
        {/* TODO: 상품 옵션 넣기 */}
        <p className="text-sm">{review.content}</p>
      </div>
    </div>
  )
}
