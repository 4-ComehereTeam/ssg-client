"use client"

import { Categories } from "@/actions/category/category"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef } from "react"
import SubCategoryDrawer from "./SubCategoryDrawer"

export default function SubCategorySlideButton({
  bigCtgId,
  midCtgId,
  existingSmall,
  subCategories,
}: {
  bigCtgId: number
  midCtgId: number
  existingSmall: boolean
  subCategories: Categories
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isOpenAllCategory, setIsOpenAllCategory] = useState(false)
  const buttonRefs = useRef<HTMLButtonElement[]>([])
  console.log(selectedIndex)

  const handleCategoryClick = (index: number) => {
    setSelectedIndex(index)
    if (buttonRefs.current[index]) {
      buttonRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  const setButtonRef = (element: HTMLButtonElement, index: number) => {
    buttonRefs.current[index] = element
  }

  const handleOpenAllCategory = () => {
    setIsOpenAllCategory(!isOpenAllCategory)
  }

  const handleDrawer = (index: number) => {
    setIsOpenAllCategory(!isOpenAllCategory)
    setSelectedIndex(index)
    if (buttonRefs.current[index]) {
      buttonRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }
  return (
    <>
      <div className="col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] top-[46px] bg-white">
        <div className="flex-start flex-shrink-0 align-middle relative pr-[54px]">
          <div className="h-[56px] overflow-hidden text-nowrap flex">
            <div className="flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-scroll scrollbar-hide">
              {subCategories.map((subCtg, index) => (
                <Link
                  key={subCtg.id}
                  href={
                    existingSmall
                      ? `/category-items?big=${bigCtgId}&mid=${midCtgId}&small=${subCtg.id}`
                      : `/category-items?big=${bigCtgId}&mid=${subCtg.id}`
                  }
                  onClick={() => handleCategoryClick(index)}
                >
                  <button
                    ref={(element) => element && setButtonRef(element, index)}
                    className={`min-w-min h-full text-xs font-semibold mr-[5px] pl-2 pr-2 ${
                      selectedIndex === index
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  >
                    {subCtg.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="bg-white top-[10px] absolute bottom-[10px] right-0 pr-4">
              <button
                onClick={handleOpenAllCategory}
                className="min-w-9 min-h-9 rotate-90 inline-flex items-center justify-center text-sm border border-gray-200"
              >
                <div className="w-[18px] h-[18px] text-black font-bold">
                  <Image
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                    alt="카테고리 펼치기"
                    className="-rotate-90"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubCategoryDrawer
        bigCtgId={bigCtgId}
        midCtgId={midCtgId}
        existingSmall={existingSmall}
        isOpenAllCategory={isOpenAllCategory}
        selectedIndex={selectedIndex}
        handleDrawer={handleDrawer}
        subCategories={subCategories}
      />
    </>
  )
}
