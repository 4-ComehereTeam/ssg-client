"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function HeaderOfItem({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const imageTop =
        document.querySelector("section")?.getBoundingClientRect().top ?? 0
      if (imageTop < 0) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollMoveToDesc = () => {
    const descriptionSection = document.getElementById("descriptionSection")
    descriptionSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollMoveToReview = () => {
    const reviewSection = document.getElementById("reviewSection")
    reviewSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 transition-opacity duration-300 ${
        showHeader ? "opacity-100" : "opacity-0"
      } bg-white z-[100] flex justify-between items-center pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300`}
    >
      <div className="w-[50px] h-[30px]" onClick={() => router.back()}>
        <Image
          width="26"
          height="26"
          className="mx-auto"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="backButton"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex-auto my-auto">
        <ul className="flex flex-row justify-center gap-8 font-bold">
          <li>
            <div onClick={handleScrollMoveToDesc}>
              <span>상세</span>
            </div>
          </li>
          <li>
            <div onClick={handleScrollMoveToReview}>
              <p className="mb-[-9px]">리뷰</p>
              {children}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
