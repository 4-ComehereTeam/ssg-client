"use client"

import {
  BigCategoriesData,
  MiddleCategories,
} from "@/actions/category/category"
import BigCategory from "./BigCategory"
import MiddleCategory from "./MiddleCategory"

export default function CategoryTable({
  bigCategoriesData,
  start,
  end,
  handleMiddleCategories,
  isOpenMid,
  openBigId,
  middleCategories,
}: {
  bigCategoriesData: BigCategoriesData
  start: number
  end: number
  handleMiddleCategories: (bigCategoryId: number) => Promise<void>
  isOpenMid: boolean | undefined
  openBigId: number | undefined
  middleCategories: MiddleCategories
}) {
  const isCurrentRow = (bigCategoryId: number) =>
    bigCategoryId >= start + 1 && bigCategoryId <= end
  return (
    <div>
      <div className="grid grid-cols-5 auto-rows-auto px-[10px]">
        {bigCategoriesData.bigCategories.slice(start, end).map((big) => (
          <div
            key={big.id}
            className="py-2 min-h-[80px]"
            onClick={() => handleMiddleCategories(big.id)}
          >
            <BigCategory
              bigCategoryId={big.id}
              bigCategoryName={big.name}
              bigCategoriesCount={bigCategoriesData.count}
            />
          </div>
        ))}
      </div>
      {isOpenMid && openBigId && isCurrentRow(openBigId) && (
        <MiddleCategory
          bigCategoryId={openBigId}
          middleCategories={middleCategories}
        />
      )}
    </div>
  )
}
