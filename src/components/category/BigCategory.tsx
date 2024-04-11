import { lCategoryDummy } from "@/lib/lCategoryDummy"
import Image from "next/image"

export default function BigCategory({
  bigCategoryId,
  bigCategoryName,
}: {
  bigCategoryId: number
  bigCategoryName: string
  bigCategoriesCount: number
}) {
  return (
    <div>
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
    </div>
  )
}
