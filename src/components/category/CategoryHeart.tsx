"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import heartFill from "@/public/asset/images/heart-fill.png"
import heartBorder from "@/public/asset/images/heart-border.png"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SIGNIN_WITH_CALLBACK } from "@/routes"
import {
  ClipCategoryId,
  deleteClipCategories,
  NoneIdClipCategoryId,
  postClipCategory,
} from "@/actions/clip/categoryClip"

export default function CategoryHeart({
  clipCategoryId,
  isCliped,
}: {
  clipCategoryId: NoneIdClipCategoryId
  isCliped: boolean
}) {
  const [clickHeart, setClickHeart] = useState(isCliped)
  const { data: session } = useSession()
  const router = useRouter()

  const categoryId: NoneIdClipCategoryId = {
    bigCategoryId: clipCategoryId.bigCategoryId,
    middleCategoryId: clipCategoryId.middleCategoryId,
    smallCategoryId: clipCategoryId.smallCategoryId,
  }

  useEffect(() => {
    setClickHeart(isCliped)
  }, [clipCategoryId, isCliped])

  const handleHeart = async () => {
    if (session?.user.accessToken) {
      setClickHeart(!clickHeart)
      if (clickHeart) {
        await deleteClipCategories([categoryId])
      } else {
        await postClipCategory(categoryId)
      }
    } else {
      router.push(SIGNIN_WITH_CALLBACK)
    }
  }
  return (
    <button className="w-[28px] h-[28px]" onClick={() => handleHeart()}>
      {clickHeart ? (
        <Image
          src={heartFill}
          alt={"관심 카테고리 등록"}
          width={20}
          height={20}
        />
      ) : (
        <Image
          src={heartBorder}
          alt={"관심 카테고리 취소"}
          width={20}
          height={20}
        />
      )}
    </button>
  )
}
