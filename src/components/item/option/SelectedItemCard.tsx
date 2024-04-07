"use client"

import { ItemBasicInfo } from "@/actions/item"
import { ItemOption } from "@/actions/itemOption"
import Image from "next/image"
import { useState } from "react"

type SelectedItemCardProps = {
  itemOptions: ItemOption[]
  itemBasicInfo: ItemBasicInfo | null
  handleItemOptions: (index: number) => void
}

export default function SelectedItemCard({
  itemOptions,
  itemBasicInfo,
  handleItemOptions,
}: SelectedItemCardProps) {
  const [itemCount, setItemCount] = useState(1)
  const discountRate = itemBasicInfo ? itemBasicInfo.discountRate : 0
  const price = itemBasicInfo ? itemBasicInfo.price : 0
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price
  const finalPrice = new Intl.NumberFormat().format(
    Math.round(discountPrice * itemCount),
  )

  return (
    <div className="mt-4">
      {itemOptions.map((itemOption, index) => (
        <div key={itemOption.itemOptionId} className="px-4">
          <div className="py-4 flex flex-col gap-2 border border-black rounded-md bg-[#f8f8f8f8]">
            <div className="px-4 flex flex-row justify-between ">
              <p>
                <span className="text-xs">색상: {itemOption.color}</span>
                {itemOption.size && <span> / 사이즈: {itemOption.size}</span>}
                {itemOption.etc && <span> / 기타: {itemOption.etc}</span>}
              </p>
              <div onClick={() => handleItemOptions(index)}>
                <Image
                  width={16}
                  height={16}
                  src="https://img.icons8.com/sf-ultralight/25/delete-sign.png"
                  alt="삭제"
                />
              </div>
            </div>
            <div className="px-4 flex flex-row justify-between items-center">
              <div className="basis-1/3 bg-white flex flex-row justify-between items-center">
                <button
                  className="w-[34px] h-[33px] text-[20px]"
                  onClick={() => setItemCount(itemCount - 1)}
                  disabled={itemCount < 2}
                >
                  -
                </button>
                <span>{itemCount}</span>
                <button
                  className="w-[34px] h-[33px] text-[20px]"
                  onClick={() => setItemCount(itemCount + 1)}
                >
                  +
                </button>
              </div>
              <span className="font-bold">{finalPrice}원</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
