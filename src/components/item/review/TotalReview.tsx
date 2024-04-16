import Image from "next/image"
import Link from "next/link"
import ReviewCard from "./ReviewCard"
import { getItemReview, getOneReviewImages } from "@/actions/review"

type TotalReviewProps = {
  itemId: string
  reviewCount: number
  reviewIds: number[] | undefined
}

export type Review = {
  reviewId: number
  createAt: string
  updateAt: string
  star: number
  signinId: string
  content: string
}

export type ReviewImages = {
  reviewId: number
  images: {
    imageId: number
    url: string
    alt: string
  }[]
}

export default function TotalReview({
  itemId,
  reviewCount,
  reviewIds,
}: TotalReviewProps) {
  return (
    <div>
      <h3 className="font-bold ml-4">전체 리뷰</h3>
      <div className="px-4 flex flex-col gap-4 items-center">
        {reviewIds?.map(async (reviewId) => {
          const review: Review = await getItemReview(reviewId.toString())
          const reviewImages: ReviewImages = await getOneReviewImages(
            reviewId.toString(),
          )
          return (
            <ReviewCard
              key={reviewId}
              review={review}
              reviewImages={reviewImages}
              itemId={itemId}
            />
          )
        })}
        <Link
          href={`/not-found`}
          className="flex gap-2 h-10 mt-2 w-[90%] text-sm text-[#888888] items-center justify-center rounded-md border border-solid"
        >
          <span>더보기 ({reviewCount})</span>
          <div className="w-3">
            <Image
              width="12"
              height="12"
              src="https://img.icons8.com/small/16/000000/back.png"
              alt="back"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
