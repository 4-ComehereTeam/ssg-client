"use client"

import { ItemBasicInfo } from "@/actions/item"
import Image from "next/image"
import { ItemOptions } from "../ItemBottomBar"

type SelectedItemOptionCardProps = {
  itemOptions: ItemOptions
  itemBasicInfo: ItemBasicInfo | null
  deleteItemOption: (index: number) => void
  handleItemOptionCount: (itemOptionId: number, count: number) => void
}

export default function SelectedItemOptionCard({
  itemOptions,
  itemBasicInfo,
  deleteItemOption,
  handleItemOptionCount,
}: SelectedItemOptionCardProps) {
  const discountRate = itemBasicInfo ? itemBasicInfo.discountRate : 0
  const price = itemBasicInfo ? itemBasicInfo.price : 0
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price

  return (
    <div className="mt-4 mb-24 flex flex-col gap-2">
      {itemOptions.map((itemOption, index) => (
        <div key={itemOption.itemOptionId} className="px-4">
          <div
            className={`py-4 flex flex-col gap-3 ${
              index === 0 && "border border-black"
            } rounded-md bg-[#f8f8f8f8]`}
          >
            <div className="px-4 flex flex-row justify-between ">
              <p className="text-xs">
                <span>색상: {itemOption.color}</span>
                {itemOption.size && <span> / 사이즈: {itemOption.size}</span>}
                {itemOption.etc && <span> / 기타: {itemOption.etc}</span>}
              </p>
              <div onClick={() => deleteItemOption(index)}>
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
                  onClick={() =>
                    handleItemOptionCount(
                      itemOption.itemOptionId,
                      itemOption.count - 1,
                    )
                  }
                  disabled={itemOption.count < 2}
                >
                  -
                </button>
                <span>{itemOption.count}</span>
                <button
                  className="w-[34px] h-[33px] text-[20px]"
                  onClick={() =>
                    handleItemOptionCount(
                      itemOption.itemOptionId,
                      itemOption.count + 1,
                    )
                  }
                  disabled={itemOption.stock <= itemOption.count}
                >
                  +
                </button>
              </div>
              <span className="font-bold">
                {new Intl.NumberFormat().format(
                  Math.round(discountPrice * itemOption.count),
                )}
                원
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
