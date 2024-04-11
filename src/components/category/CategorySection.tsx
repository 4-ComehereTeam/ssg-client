"use client"

import {
  BigCategoriesData,
  getMiddleCategories,
  Categories,
} from "@/actions/category/category"
import CategoryTable from "./CategoryTable"
import { useState } from "react"

export default function CategorySection({
  bigCategoriesData,
}: {
  bigCategoriesData: BigCategoriesData
}) {
  const row = Math.ceil(bigCategoriesData.count / 5)
  const [openMiddles, setOpenMiddles] = useState(
    Array.from({ length: bigCategoriesData.count }, (_, index) => ({
      id: index + 1,
      isOpen: false,
    })),
  )
  const [middleCategories, setMiddleCategories] = useState<Categories>([])

  const handleMiddleCategories = async (bigCategoryId: number) => {
    setOpenMiddles((prevOpenMiddles) =>
      prevOpenMiddles.map((ctg) =>
        ctg.id === bigCategoryId
          ? { ...ctg, isOpen: true }
          : { ...ctg, isOpen: false },
      ),
    )
    const result = await getMiddleCategories(bigCategoryId)
    if (result) {
      setMiddleCategories(result.middleCategories)
    }
  }

  const openBigId = openMiddles.find((mid) => mid.isOpen)?.id
  const isOpenMid = openMiddles.find((mid) => mid.isOpen)?.isOpen

  return (
    <>
      {Array.from({ length: row }, (_, index) => {
        const start = index * 5
        const end = start + 5
        return (
          <CategoryTable
            key={index}
            bigCategoriesData={bigCategoriesData}
            start={start}
            end={end}
            handleMiddleCategories={handleMiddleCategories}
            isOpenMid={isOpenMid}
            openBigId={openBigId}
            middleCategories={middleCategories}
          />
        )
      })}
    </>
  )
}
