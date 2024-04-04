"use client"

import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ReviewImages } from "../item/TotalReview"
import "swiper/css"

export default function ReviewImageSwiper({
  reviewImages,
}: {
  reviewImages: ReviewImages
}) {
  return (
    <section className="relative">
      <Swiper
        loop={false}
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
              style={{ width: "100%" }}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-[50%] translate-x-[-50%] w-14 z-10 text-xs text-white bg-black px-1 py-1  bg-opacity-40 rounded-full text-center">
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}
