import { getItemBasicInfo, getItemCalc } from "@/actions/item"
import ReviewScore from "./ReviewScore"
import { getItemReviewIds } from "@/actions/review"
import ReviewContents from "./ReviewContents"

export default async function ReviewContainer({ itemId }: { itemId: string }) {
  const calc = await getItemCalc(itemId)
  const basicInfo = await getItemBasicInfo(itemId)
  const reviewIds = await getItemReviewIds(basicInfo.itemCode)

  return (
    <section id="reviewSection" className="pb-10">
      <h3 className="ml-4 border-b-[1px] border-[#777777] font-bold text-[19px]">
        고객리뷰
      </h3>
      <ReviewScore
        reviewCount={calc.reviewCount}
        averageStar={calc.averageStar}
      />
      <ReviewContents
        itemId={itemId}
        reviewCount={calc.reviewCount}
        reviewIds={reviewIds.reviews}
      />
    </section>
  )
}
