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
      <div>
        <Image
          src={src}
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
