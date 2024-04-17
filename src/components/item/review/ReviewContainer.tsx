import { getItemBasicInfo, getItemCalc } from "@/actions/item"
import ReviewScore from "./ReviewScore"
import { getItemAllReviewImages, getItemReviewIds } from "@/actions/review"
import TotalReview from "./TotalReview"
import ReviewPhotos from "./ReviewPhotos"

export type AllReviewImages = {
  itemCode: string
  images: {
    reviewId: number
    imageId: number
    url: string
    alt: string
  }[]
}

export default async function ReviewContainer({ itemId }: { itemId: string }) {
  const calc = await getItemCalc(itemId)
  const basicInfo = await getItemBasicInfo(itemId)
  const itemCode = basicInfo ? basicInfo.itemCode : "0"
  const reviewIds = await getItemReviewIds(itemCode)
  const allReviewImages: AllReviewImages | null = await getItemAllReviewImages(
    itemCode,
  )
  if (calc) {
    return (
      <section id="reviewSection" className="pb-10">
        <h3 className="ml-4 border-b-[1px] border-[#777777] font-bold text-[19px]">
          고객리뷰
        </h3>
        <ReviewScore
          reviewCount={calc.reviewCount}
          averageStar={calc.averageStar}
        />
        {allReviewImages && (
          <ReviewPhotos allReviewImages={allReviewImages} itemId={itemId} />
        )}
        <TotalReview
          itemId={itemId}
          reviewCount={calc.reviewCount}
          reviewIds={reviewIds?.reviews}
        />
      </section>
    )
  }
}
