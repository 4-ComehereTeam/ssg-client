"use client"

import { deleteClip } from "@/actions/clip"
import Image from "next/image"
import { useState } from "react"
import heartFill from "@/public/asset/images/heart-fill.png"
import heartBorder from "@/public/asset/images/heart-border.png"

export default function Heart({ itemId }: { itemId: number }) {
  const [clickHeart, setClickHeart] = useState(true)

  const handleHeart = async () => {
    setClickHeart(!clickHeart)
    if (clickHeart) {
      await deleteClip(itemId)
    }
  }
  return (
    <button className="w-[28px] h-[28px]" onClick={() => handleHeart()}>
      {clickHeart ? (
        <Image src={heartFill} alt={"싫어요"} width={20} height={20} />
      ) : (
        <Image src={heartBorder} alt={"싫어요"} width={20} height={20} />
      )}
    </button>
  )
}
