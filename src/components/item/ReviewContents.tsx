import Link from "next/link"
import ReviewCard from "./ReviewCard"
import Image from "next/image"

type TotalReviewProps = {
  itemId: string
  reviewCount: number
  reviewIds: number[]
}

export default async function ReviewContents({
  itemId,
  reviewCount,
  reviewIds,
}: TotalReviewProps) {
  return (
    <div>
      <h3 className="font-bold ml-4">전체 리뷰</h3>
      <div className="px-4 flex flex-col gap-4 items-center">
        {reviewIds.map((reviewId) => (
          <ReviewCard key={reviewId} reviewId={reviewId}></ReviewCard>
        ))}

        <Link
          href={`/review/${itemId}`}
          className="flex gap-2 h-10 mt-2 w-[90%] text-sm text-[#888888] items-center justify-center rounded-md border border-solid"
        >
          <span>더보기 ({reviewCount - 5})</span>
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
