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
  const [activateSection, setActivateSection] = useState({
    description: false,
    review: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const imageTop =
        document.querySelector("section")?.getBoundingClientRect().top ?? 0
      if (imageTop < 0) {
        setShowHeader(true)

        const headerBottom =
          document.getElementById("header")?.getBoundingClientRect().bottom ?? 0
        const descriptionSection = document.getElementById("descriptionSection")
        const reviewSection = document.getElementById("reviewSection")

        const descTop = descriptionSection?.getBoundingClientRect().top ?? 0
        const reviewTop = reviewSection?.getBoundingClientRect().top ?? 0
        const descBottom =
          descriptionSection?.getBoundingClientRect().bottom ?? 0
        const reviewBottom = reviewSection?.getBoundingClientRect().bottom ?? 0

        if (descTop <= headerBottom && descBottom >= headerBottom) {
          setActivateSection({
            ...activateSection,
            ["description"]: true,
          })
        } else if (reviewTop <= headerBottom && reviewBottom >= headerBottom) {
          setActivateSection({
            ...activateSection,
            ["review"]: true,
          })
        } else {
          setActivateSection({
            ...activateSection,
            ["description"]: false,
            ["review"]: false,
          })
        }
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      id="header"
      className={`fixed top-0 left-0 right-0 transition-opacity duration-300 ${
        showHeader ? "" : "hidden"
      } bg-white z-10 flex justify-between items-center pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300`}
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
            <div
              onClick={handleScrollMoveToDesc}
              className={`${
                activateSection.description ? "text-[#FF5452]" : ""
              }`}
            >
              <span>상세</span>
            </div>
          </li>
          <li>
            <div
              onClick={handleScrollMoveToReview}
              className={`${activateSection.review ? "text-[#FF5452]" : ""}`}
            >
              <p className="mb-[-9px]">리뷰</p>
              {children}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
