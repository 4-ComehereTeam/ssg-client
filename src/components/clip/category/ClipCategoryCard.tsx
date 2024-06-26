"use client"

import {
  getBigCategoryName,
  getMidCategoryName,
  getSmallCategoryName,
} from "@/actions/category/category"
import {
  ClipCategoryId,
  getIsClipedCategory,
} from "@/actions/clip/categoryClip"
import CategoryHeart from "@/components/category/CategoryHeart"
import { Skeleton } from "@/components/ui/Skeleton"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ClipCategoryCard({
  clipCategory,
  children,
}: {
  clipCategory: ClipCategoryId
  children: React.ReactNode
}) {
  const [bigCategoryName, setBigCategoryName] = useState("")
  const [midCategoryName, setMidCategoryName] = useState("")
  const [smallCategoryName, setSmallCategoryName] = useState("")
  const [isCliped, setIsCliped] = useState(true)
  const router = useRouter()
  useEffect(() => {
    ;(async () => {
      const bigResult = await getBigCategoryName(clipCategory.bigCategoryId)
      setBigCategoryName(bigResult ? bigResult.categoryName : "")
      if (clipCategory.middleCategoryId) {
        const midResult = await getMidCategoryName(
          clipCategory.middleCategoryId,
        )
        setMidCategoryName(midResult ? midResult.categoryName : "")
      }
      if (clipCategory.smallCategoryId) {
        const smallResult = await getSmallCategoryName(
          clipCategory.smallCategoryId,
        )
        setSmallCategoryName(smallResult ? smallResult.categoryName : "")
      }
      const isClipedResult = await getIsClipedCategory(clipCategory)
      if (isClipedResult) {
        setIsCliped(isClipedResult.isCliped)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let categoryPagePath = `/category-items?big=${clipCategory.bigCategoryId}`
  if (clipCategory.middleCategoryId) {
    categoryPagePath += `&mid=${clipCategory.middleCategoryId}`
  }
  if (clipCategory.smallCategoryId) {
    categoryPagePath += `&small=${clipCategory.smallCategoryId}`
  }

  return (
    <>
      {children}
      {!bigCategoryName ? (
        <Skeleton className="h-[50px] my-[5px]" />
      ) : (
        <div className="ml-6 flex flex-row h-[60px] justify-between items-center text-center">
          <div
            className="flex flex-row"
            onClick={() => router.push(categoryPagePath)}
          >
            <span>{bigCategoryName}</span>
            {midCategoryName && (
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                alt="구분자"
                className="-rotate-90"
              />
            )}
            <span>{midCategoryName}</span>
            {smallCategoryName && (
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                alt="구분자"
                className="-rotate-90"
              />
            )}
            <span>{smallCategoryName}</span>
          </div>
          <CategoryHeart clipCategoryId={clipCategory} isCliped={isCliped} />
        </div>
      )}
    </>
  )
}
