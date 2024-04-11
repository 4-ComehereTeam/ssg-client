import {
  getCategoryItems,
  getCategoryItemsCount,
} from "@/actions/category/categoryItems"
import ItemCard from "../item/ItemCard"
import Image from "next/image"

export default async function ProductList({
  categoryIds,
  categoryItemsCount,
}: {
  categoryIds: {
    big: number
    mid: number
    small: number
  }
  categoryItemsCount: number
}) {
  const categoryItemsData = await getCategoryItems(
    categoryIds.big,
    categoryIds.mid,
    categoryIds.small,
  )

  if (
    !categoryItemsData ||
    !categoryItemsData.itemIds.length ||
    !categoryItemsCount
  ) {
    return (
      <div className="h-[100vw] overflow-hidden">
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center">
          <Image
            width="96"
            height="96"
            src="https://img.icons8.com/color/96/ingredients.png"
            alt="ingredients"
          />
          <p className="text-center text-sm">상품을 준비 중이에요.</p>
        </div>
      </div>
    )
  }
  return (
    <div className="col-start-2 col-end-auto">
      <div className="grid-cols-custom grid gap-y-0 gap-x-2 ms-4 me-4">
        <div className="text-xs flex pt-3">
          <span className="font-bold">
            {new Intl.NumberFormat().format(categoryItemsCount)}개
          </span>
          <span className="text-gray-500">의 상품이 있습니다.</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {categoryItemsData.itemIds.map((itemId) => (
            <ItemCard key={`${itemId}-categoryItemId`} itemId={itemId} />
          ))}
        </div>
      </div>
    </div>
  )
}
