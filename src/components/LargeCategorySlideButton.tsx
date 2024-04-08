"use client"

import SmallArrowIcon from "@/asset/images/SmallArrowIcon"
import { lCategoryDummy } from "@/lib/lCategoryDummy"
import React, { useState, useRef, useEffect } from "react"
// import LargeCategoryList from '../modal/LargeCategoryList';

export default function LargeCategorySlideButton() {
  const buttonRefs = useRef<HTMLButtonElement[]>([])

  const handleCategoryClick = (category: string, index: number) => {
    setIsSelected(category)
    buttonRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, lCategoryDummy.length)
  }, [])

  const [isSelected, setIsSelected] = useState(lCategoryDummy[0].title)
  const [isOpenCategory, setIsOpenCategory] = useState(false)

  const handleOpenCategoryList = () => {
    setIsOpenCategory(true)
  }

  const handleCloseCategoryList = () => {
    setIsOpenCategory(false)
  }

  return (
    <div className="col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] top-[46px] sticky z-[1000] bg-white">
      <div className="flex-start flex-shrink-0 align-middle relative pr-[54px] overflow-x-scroll">
        <div className="h-[56px] overflow-hidden text-nowrap flex">
          <div className="flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-scroll">
            {lCategoryDummy.map((category, idx) => {
              if (category.title === "") {
                return
              }
              return (
                <button
                  key={idx}
                  ref={(el) => {
                    if (el) buttonRefs.current[idx] = el
                  }}
                  onClick={() => {
                    handleCategoryClick(category.title, idx)
                  }}
                  className={`min-w-min h-[36px] text-xs font-semibold border mr-[5px] pl-2 pr-2 
                    ${
                      isSelected === category.title
                        ? "bg-black text-white border-black"
                        : "bg-white text-xs  text-black border-gray-200"
                    }`}
                >
                  {category.title}
                </button>
              )
            })}
          </div>
          <div className="bg-white top-[10px] absolute  bottom-[10px] right-0 pr-4">
            <button
              onClick={handleOpenCategoryList}
              className="min-w-9 min-h-9 rotate-90 inline-flex items-center justify-center text-sm border border-gray-200"
            >
              <div className="w-[18px] h-[18px] text-black font-bold">
                <SmallArrowIcon />
              </div>
              {/* {isOpenCategory && <LargeCategoryList onClose={handleCloseCategoryList} />} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
