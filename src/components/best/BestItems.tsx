import ItemCard from "../item/ItemCard"
import Image from "next/image"
import { Suspense } from "react"
import { getBestItems } from "@/actions/bestItems"
import { SkeletonCard } from "../ui/SkeletonCard"

export default async function BestItems({
  categoryId,
}: {
  categoryId: number | null
}) {
  const bestItemsData = await getBestItems(categoryId)

  if (!bestItemsData || !bestItemsData.items.length) {
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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-3">
      {bestItemsData.items.map((itemId, index) => (
        <div key={`${itemId}-bestItemId`}>
          <Suspense fallback={<SkeletonCard />}>
            <span className="absolute w-[20px] h-[20px] bg-[#666666] text-white text-[11px] text-center leading-[20px] mt-2">
              {Math.floor(index / 10) < 1
                ? (index + 1).toString().padStart(2, "0")
                : index + 1}
            </span>
            <ItemCard itemId={itemId} />
          </Suspense>
        </div>
      ))}
    </div>
  )
}
