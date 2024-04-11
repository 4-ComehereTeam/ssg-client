"use client"

import { BigCategoriesData } from "@/actions/category/category"
import BigCategory from "./BigCategory"
import { useState } from "react"

export default function CategoryTable({
  bigCategoriesData,
}: {
  bigCategoriesData: BigCategoriesData
}) {
  const [openMiddles, setOpenMiddles] = useState(
    Array.from({ length: bigCategoriesData.count }, (_, index) => ({
      id: index + 1,
      isOpen: false,
    })),
  )
  const handleMiddleCategories = async (bigCategoryId: number) => {
    setOpenMiddles((prevOpenMiddles) =>
      prevOpenMiddles.map((ctg) =>
        ctg.id === bigCategoryId
          ? { ...ctg, isOpen: true }
          : { ...ctg, isOpen: false },
      ),
    )
  }
  return (
    <div className="h-screen">
      <ul className="grid grid-cols-5 auto-rows-auto pt-[15px] pr-[10px] pb-[25px] pl-[10px]">
        {bigCategoriesData.bigCategories.map((big) => (
          <li
            key={big.id}
            className="py-2 min-h-[80px]"
            onClick={() => handleMiddleCategories(big.id)}
          >
            <BigCategory
              bigCategoryId={big.id}
              bigCategoryName={big.name}
              bigCategoriesCount={bigCategoriesData.count}
              isOpen={openMiddles.find((ctg) => ctg.id === big.id)?.isOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
