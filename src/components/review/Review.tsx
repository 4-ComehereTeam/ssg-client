"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"

export default function Review() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset || window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const items = new Array(10).fill(null)
  return (
    <div className="px-[18.25px] py-5 z-0">
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold text-xs mt-1 whitespace-nowrap">
          ★ 5 <span className="text-zinc-100">|</span> 일반
        </div>
        <div className="text-xs mt-1 whitespace-nowrap text-gray-400">
          신고/차단
        </div>
      </div>
      <div className="flex flex-row items-center justify-start text-xs whitespace-nowrap text-gray-400 mt-[7px] mb-5">
        <span className="w-[67.813px] h-[15.2px] pr-[5px] py-0 whitespace-nowrap">
          2024.03.12
        </span>
        <span className="text-zinc-100 px-">|</span>
        <span className="w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] whitespace-nowrap">
          miz*******
        </span>
        <span className="text-zinc-100 px-">|</span>
        <span className="w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] whitespace-nowrap">
          가든5점
        </span>
      </div>
      <div className="w-full h-full relative">
        <Swiper
          slidesPerView={1.03}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {items.slice(0, 10).map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Link
                href="#"
                className="relative block w-[88vw] h-[88vw] bg-lime-400 rounded-lg overflow-hidden text-white font-sans text-9xl object-cover"
              >
                {index}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-[15px]">
        <p className="whitespace-nowrap text-sm">내용</p>
      </div>
    </div>
  )
}
