import ReviewTotalScore from "@/components/review/ReviewTotalScore"
import Review from "@/components/review/Review"
import PhotoReviewBanner from "@/components/review/PhotoReviewBanner"
import ReviewNavbar from "@/components/review/ReviewNavbar"

export default function page() {
  return (
    <main>
      <ReviewTotalScore />
      <PhotoReviewBanner />
      <ReviewNavbar />
      <Review />
    </main>
  )
}
