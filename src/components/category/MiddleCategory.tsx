"use client"

import {
  getMiddleCategories,
  MiddleCategories,
} from "@/actions/category/category"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MiddleCategory({
  bigCategoryId,
}: {
  bigCategoryId: number
}) {
  const [middleCategories, setMiddleCatogories] = useState<MiddleCategories>([])
  const [isVisible, setIsVisible] = useState(false)

  const handleMiddleCategories = async () => {
    const result = await getMiddleCategories(bigCategoryId)
    if (result) {
      setMiddleCatogories(result.middleCategories)
    }
  }

  useEffect(() => {
    handleMiddleCategories()
    setIsVisible(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const visibilityClass = isVisible ? "opacity-100" : "opacity-0"
  if (middleCategories) {
    return (
      <div
        className={`relative left-0 z-50 h-auto w-[100vw] transition-opacity duration-500 ${visibilityClass}`}
      >
        {middleCategories && (
          <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 my-[5px] box-border">
            <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
              <p>
                <Link href={"/category/all"} passHref>
                  상품 전체보기
                </Link>
              </p>
            </li>
            {middleCategories.map((mid) => (
              <li
                key={mid.id}
                className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]"
              >
                <p>
                  <Link href={`/category/${bigCategoryId}/${mid.id}`} passHref>
                    {mid.name}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
