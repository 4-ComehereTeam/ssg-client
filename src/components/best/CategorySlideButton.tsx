"use client"

import { Categories } from "@/actions/category/category"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef } from "react"
import CategoryDrawer from "./CategoryDrawer"

export default function CategorySlideButton({
  categories,
}: {
  categories: Categories
}) {
  const [selectedCtgId, setSelectedCtgId] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)
  const buttonRefs = useRef<HTMLButtonElement[]>([])
  const totalCategories = [{ id: 0, name: "전체" }].concat(categories)

  const handleCategoryClick = (ctgId: number) => {
    setSelectedCtgId(ctgId)
    const clickedButton = buttonRefs.current.find(
      (button) => parseInt(button.id) === ctgId,
    )
    if (clickedButton) {
      clickedButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  const setButtonRef = (element: HTMLButtonElement, index: number) => {
    buttonRefs.current[index] = element
  }

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleDrawer = (index: number) => {
    setOpenDrawer(!openDrawer)
    setSelectedCtgId(index)
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
      <div className="sticky z-20 col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] top-[46px] bg-white">
        <div className="flex-start flex-shrink-0 align-middle relative pr-[54px]">
          <div className="h-[56px] overflow-hidden text-nowrap flex">
            <div className="flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-scroll scrollbar-hide">
              {totalCategories.map((ctg, index) => (
                <Link key={ctg.id} href={`?big=${ctg.id}`} scroll={false}>
                  <button
                    id={ctg.id.toString()}
                    ref={(element) => element && setButtonRef(element, index)}
                    onClick={() => handleCategoryClick(ctg.id)}
                    className={`min-w-min h-full text-xs font-semibold mr-[5px] pl-2 pr-2 ${
                      selectedCtgId === ctg.id
                        ? "bg-black text-white"
                        : "border-gray-200 border-[1px] text-black"
                    }`}
                  >
                    {ctg.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-row top-[10px] absolute bottom-[10px] right-0 pr-4">
              <div className="w-[20px] h-[36px] bg-gradient-to-l from-white"></div>
              <button
                onClick={handleOpenDrawer}
                className="bg-white min-w-9 min-h-9 rotate-90 inline-flex items-center justify-center text-sm border border-gray-200"
              >
                <div className="w-[18px] h-[18px] bg-white text-black font-bold">
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
      <CategoryDrawer
        isOpenAllCategory={openDrawer}
        selectedCtgId={selectedCtgId}
        handleDrawer={handleDrawer}
        categories={totalCategories}
      />
    </>
  )
}
