"use client"

import { deleteClip, postClip } from "@/actions/itemClip"
import Image from "next/image"
import { useState } from "react"
import heartFill from "@/public/asset/images/heart-fill.png"
import heartBorder from "@/public/asset/images/heart-border.png"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SIGNIN_WITH_CALLBACK } from "@/routes"

export default function ItemHeart({
  itemId,
  clicked,
}: {
  itemId: number
  clicked: boolean
}) {
  const [clickHeart, setClickHeart] = useState(clicked)
  const { data: session } = useSession()
  const router = useRouter()

  const handleHeart = async () => {
    if (session?.user.accessToken) {
      setClickHeart(!clickHeart)
      if (clickHeart) {
        await deleteClip(itemId)
      } else {
        await postClip(itemId)
      }
    } else {
      router.push(SIGNIN_WITH_CALLBACK)
    }
  }
  return (
    <button className="w-[28px] h-[28px]" onClick={() => handleHeart()}>
      {clickHeart ? (
        <Image src={heartFill} alt={"관심상품 등록"} width={20} height={20} />
      ) : (
        <Image src={heartBorder} alt={"관심상품 취소"} width={20} height={20} />
      )}
    </button>
  )
}
