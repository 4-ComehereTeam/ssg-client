"use client"

import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ItemImageType } from "@/actions/item"

export default function ItemImage({ images }: { images: ItemImageType[] }) {
  const sortedImages = images.sort(
    (a: ItemImageType, b: ItemImageType) =>
      Number(b.thumbnail) - Number(a.thumbnail),
  )

  const handleAlert = () => {
    alert("현재 개발 중입니다.")
  }

  return (
    <section>
      <div className="relative">
        <Swiper
          loop={sortedImages.length < 2 ? false : true}
          pagination={{
            type: "fraction",
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          navigation={true}
        >
          {sortedImages.map((image) => (
            <SwiperSlide key={image.imageId}>
              <Image
                src={image.url}
                alt={`${image.alt}-${image.imageId}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-4 left-[50%] translate-x-[-50%] w-14 z-10 text-white text-xs bg-black px-1 py-1  bg-opacity-20 rounded-full text-center">
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="flex justify-end border-b border-solid">
        <button onClick={handleAlert}>
          <Image
            width="25"
            height="25"
            src="https://img.icons8.com/sf-ultralight/25/share.png"
            alt="공유"
          />
        </button>
      </div>
    </section>
  )
}
