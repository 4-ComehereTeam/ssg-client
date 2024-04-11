import { lCategoryDummy } from "@/lib/lCategoryDummy"
import Image from "next/image"
import MiddleCategory from "./MiddleCategory"

export default function BigCategory({
  bigCategoryId,
  bigCategoryName,
  isOpen,
}: {
  bigCategoryId: number
  bigCategoryName: string
  bigCategoriesCount: number
  isOpen: boolean | undefined
}) {
  return (
    <div className="relative">
      <div>
        <Image
          src={lCategoryDummy[bigCategoryId - 1].img_url}
          width={64}
          height={64}
          alt={bigCategoryName}
          priority
        />
        <p className="text-[10px] text-gray-500">{bigCategoryName}</p>
      </div>
      {isOpen && <MiddleCategory bigCategoryId={bigCategoryId} />}
    </div>
  )
}
