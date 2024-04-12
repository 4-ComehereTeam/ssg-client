import ItemCard from "../item/ItemCard"
import Image from "next/image"
import { Suspense } from "react"
import Loading from "@/app/loading"
import { getBestItems } from "@/actions/bestItems"

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
    <div className="col-start-2 col-end-auto mt-2">
      <div className="grid-cols-custom grid gap-y-0 gap-x-2 ms-4 me-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {bestItemsData.items.map((itemId, index) => (
            <div key={`${itemId}-bestItemId`}>
              <Suspense fallback={<Loading />}>
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
      </div>
    </div>
  )
}
