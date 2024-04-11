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
  const src = lCategoryDummy.find((lctg) => lctg.id === bigCategoryId)?.img_url
  if (!src) {
    return
  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          src={src}
          width={64}
          height={64}
          alt={bigCategoryName}
          priority
        />
        <p className="text-[11px] text-gray-500 text-center">
          {bigCategoryName}
        </p>
      </div>
    </div>
  )
}
