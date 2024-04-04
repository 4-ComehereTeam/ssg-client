import Image from "next/image"
import Link from "next/link"
import { AllReviewImages } from "./ReviewContainer"

type ReviewPhotosProps = {
  allReviewImages: AllReviewImages
}

export default async function ReviewPhotos({
  allReviewImages,
}: ReviewPhotosProps) {
  return (
    <div className="mb-12">
      <h3 className="font-bold ml-4 mb-4">포토 & 동영상 리뷰</h3>
      <ul className="px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {allReviewImages.images.map((image) => (
          <li
            key={image.imageId}
            className="inline-block w-1/4 aspect-square h-auto oveflow-hidden mx-1.5"
          >
            <Link href={"#"}>
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
    </div>
  )
}
