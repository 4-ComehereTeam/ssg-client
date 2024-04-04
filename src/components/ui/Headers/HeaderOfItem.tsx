"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function HeaderOfItem({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const header = document.getElementById("header")
    const detailSection = document.getElementById("descriptionSection")
    const reviewSection = document.getElementById("reviewSection")

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      root: null, // 뷰포트를 기준으로
      threshold: 1.0, // 완전히 보이는 경우에만 콜백 실행
    })

    if (detailSection) observer.observe(detailSection)
    if (reviewSection) observer.observe(reviewSection)

    const handleScroll = () => {
      const { top: headerTop, bottom: headerBottom } =
        header.getBoundingClientRect()
      const { top: detailTop, bottom: detailBottom } =
        detailSection.getBoundingClientRect()
      const { top: reviewTop, bottom: reviewBottom } =
        reviewSection.getBoundingClientRect()

      if (
        (detailTop <= headerBottom && detailTop >= headerTop) ||
        (detailBottom <= headerBottom && detailBottom >= headerTop)
      ) {
        setActiveSection("detail")
      } else if (
        (reviewTop <= headerBottom && reviewTop >= headerTop) ||
        (reviewBottom <= headerBottom && reviewBottom >= headerTop)
      ) {
        setActiveSection("review")
      } else {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      id="header"
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
              <span
                style={{
                  color: activeSection === "desc" ? "#FF5452" : "black",
                }}
              >
                상세
              </span>
            </div>
          </li>
          <li>
            <div
              onClick={handleScrollMoveToReview}
              style={{
                color: activeSection === "review" ? "#FF5452" : "black",
              }}
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
