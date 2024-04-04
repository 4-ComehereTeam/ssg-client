import Image from "next/image"
import Separator from "../ui/Separator"
import { Review, ReviewImages } from "./TotalReview"
import Link from "next/link"

type ReviewCardProps = {
  review: Review
  reviewImages: ReviewImages
  itemId: string
}

export default function ReviewCard({
  review,
  reviewImages,
  itemId,
}: ReviewCardProps) {
  const coverSigninId =
    review.signinId.substring(0, 3) + "*".repeat(review.signinId.length - 3)

  const date = new Date(review.createAt)

  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`

  return (
    <div className="relative w-full mt-5 pt-5 border-t border-solid">
      <div className="flex flex-col gap-3">
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
          <span className="text-[11px] text-[#969696]">{formattedDate}</span>
          {review.updateAt && (
            <>
              <Separator className="w-[1px]" height="[10px]" />
              <span className="text-[11px] text-[#969696]">
                {review.updateAt}
              </span>
            </>
          )}
          <Separator className="w-[1px]" height="[10px]" />
          <span className="text-[11px] text-[#969696]">{coverSigninId}</span>
        </div>
        <ul className="flex flex-row gap-2">
          {reviewImages.images.map((image) => (
            <li
              key={image.imageId}
              className="w-1/3 aspect-square h-auto oveflow-hidden after:block"
            >
              <Link href={`/review/${itemId}/${review.reviewId}`}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm">{review.content}</p>
      </div>
      <Link
        href={`/review/${itemId}/${review.reviewId}`}
        className="absolute bottom-[90%] left-[93%]  w-3 h-3"
      >
        <Image
          width="16"
          height="16"
          src="https://img.icons8.com/small/16/000000/back.png"
          alt="리뷰 상세"
          style={{ transform: "rotate(180deg)" }}
        />
      </Link>
    </div>
  )
}
