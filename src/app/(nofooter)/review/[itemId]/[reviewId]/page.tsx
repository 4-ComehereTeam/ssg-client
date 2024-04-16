import { getItemBasicInfo } from "@/actions/item"
import { getItemReview, getOneReviewImages } from "@/actions/review"
import { Review, ReviewImages } from "@/components/item/review/TotalReview"
import ReviewImageSwiper from "@/components/review/ReviewImageSwiper"
import Separator from "@/components/ui/Separator"
import Image from "next/image"

export async function generateMetadata({
  params,
}: {
  params: { itemId: string; reviewId: string }
}) {
  let title = "일반 리뷰 상세"
  const basicInfo = await getItemBasicInfo(params.itemId)
  if (basicInfo) {
    title += `: ${basicInfo.itemName}`
  }
  return {
    title: title,
    icons: {
      icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
    },
  }
}

export default async function page({
  params,
}: {
  params: { itemId: string; reviewId: string }
}) {
  const review: Review = await getItemReview(params.reviewId)
  const reviewImages: ReviewImages = await getOneReviewImages(params.reviewId)

  const coverSigninId =
    review.signinId.substring(0, 3) + "*".repeat(review.signinId.length - 3)

  const date = new Date(review.createAt)

  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`
  return (
    <main className="px-3">
      <ReviewImageSwiper reviewImages={reviewImages} />
      <div className="px-4 mt-3">
        <div className="flex flex-row items-center gap-1">
          <div className="w-3 h-3">
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/star--v1.png"
              alt="별점"
            />
          </div>
          <span className="text-xs">{review.star}</span>
          <Separator className="w-[1px]" height="[10px]" />
          <span className="text-[13px] text-[#969696]">{formattedDate}</span>
          {review.updateAt && (
            <>
              <Separator className="w-[1px]" height="[10px]" />
              <span className="text-[13px] text-[#969696]">
                {review.updateAt}
              </span>
            </>
          )}
          <Separator className="w-[1px]" height="[10px]" />
          <span className="text-[13px] text-[#969696]">{coverSigninId}</span>
        </div>
        <p className="text-sm">{review.content}</p>
      </div>
    </main>
  )
}
