"use client"

import { ItemBasicInfo } from "@/actions/item"
import { ItemOptions } from "../ItemBottomBar"

type SelectedItemCardProps = {
  itemBasicInfo: ItemBasicInfo
  itemNoneOptions: ItemOptions
  handleItemOptionCount: (itemOptionId: number, count: number) => void
}

export default function SeletedItemCard({
  itemBasicInfo,
  itemNoneOptions,
  handleItemOptionCount,
}: SelectedItemCardProps) {
  const itemNoneOption = itemNoneOptions[0]
  const discountRate = itemBasicInfo ? itemBasicInfo.discountRate : 0
  const price = itemBasicInfo ? itemBasicInfo.price : 0
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price
  const totalPrice = new Intl.NumberFormat().format(
    discountPrice * itemNoneOption.count,
  )
  return (
    <div className="mt-4 mb-24 flex flex-col gap-2">
      <div className="px-4">
        {itemNoneOption.stock === 0 ? (
          <p className="text-center">품절된 상품입니다.</p>
        ) : (
          <div className="py-4 flex flex-col gap-3 rounded-md bg-[#f8f8f8f8]">
            <div className="px-4 flex flex-row justify-between ">
              <p className="text-xs">{itemBasicInfo.itemName}</p>
            </div>
            <div className="px-4 flex flex-row justify-between items-center">
              <div className="basis-1/3 bg-white flex flex-row justify-between items-center">
                <button
                  className="w-[34px] h-[33px] text-[20px]"
                  onClick={() =>
                    handleItemOptionCount(
                      itemNoneOption.itemOptionId,
                      itemNoneOption.count - 1,
                    )
                  }
                  disabled={itemNoneOption.count < 2}
                >
                  -
                </button>
                <span>{itemNoneOption.count}</span>
                <button
                  className="w-[34px] h-[33px] text-[20px]"
                  onClick={() =>
                    handleItemOptionCount(
                      itemNoneOption.itemOptionId,
                      itemNoneOption.count + 1,
                    )
                  }
                  disabled={itemNoneOption.stock <= itemNoneOption.count}
                >
                  +
                </button>
              </div>
              <span className="font-bold">{totalPrice}원</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
