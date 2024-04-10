"use client"

import { lCategoryDummy } from "@/lib/lCategoryDummy"
import Image from "next/image"
import { useState } from "react"
import MiddleCategory from "./MiddleCategory"
import {
  getMiddleCategories,
  MiddleCategories,
} from "@/actions/category/category"

export default function BigCategory({
  bigCategoryId,
  bigCategoryName,
  bigCategoriesCount,
}: {
  bigCategoryId: number
  bigCategoryName: string
  bigCategoriesCount: number
}) {
  const [middleCategories, setMiddleCatogories] = useState<MiddleCategories>([])
  const [openMiddles, setOpenMiddles] = useState(
    Array.from({ length: bigCategoriesCount }, (_, index) => ({
      id: index + 1,
      isOpen: false,
    })),
  )
  const handleMiddleCategories = async (bigCategoryId: number) => {
    const result = await getMiddleCategories(bigCategoryId)
    if (result) {
      setMiddleCatogories(result.middleCategories)
    }
    setOpenMiddles((prevOpenMiddles) =>
      prevOpenMiddles.map((ctg, idx) =>
        idx === bigCategoryId - 1
          ? { ...ctg, isOpen: true }
          : { ...ctg, isOpen: false },
      ),
    )
  }
  console.log(openMiddles)
  return (
    <div
      className="absoulte flex flex-col justify-center items-center"
      onClick={() => handleMiddleCategories(bigCategoryId)}
    >
      <Image
        src={lCategoryDummy[bigCategoryId - 1].img_url}
        width={64}
        height={64}
        alt={bigCategoryName}
        priority
      />
      <p className="text-[10px] text-gray-500">{bigCategoryName}</p>
      {openMiddles[bigCategoryId - 1].isOpen && (
        <MiddleCategory
          bigCategoryId={bigCategoryId}
          middleCategories={middleCategories}
        />
      )}
    </div>
  )
}
