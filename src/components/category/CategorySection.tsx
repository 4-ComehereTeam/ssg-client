"use client"

import {
  BigCategoriesData,
  getMiddleCategories,
  Categories,
} from "@/actions/category/category"
import CategoryTable from "./CategoryTable"
import { useState } from "react"
import CategoryShopCard from "./CategoryShopCard"
import { categoryShops } from "@/data/categoryShop"

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
    <div>
      <p className="px-4 text-sm font-bold mt-4">전체 카테고리</p>
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
      <p className="px-4 text-sm font-bold mt-8">더 특별한 쇼핑</p>
      <div className="grid grid-cols-2 gap-3 px-4 mt-2">
        {categoryShops.map((shop) => (
          <CategoryShopCard key={`shop-${shop.id}`} shop={shop} />
        ))}
      </div>
    </div>
  )
}
