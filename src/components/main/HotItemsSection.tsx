import Link from "next/link"
import { getBigCategories } from "@/actions/category/category"
import CategorySlideButton from "../best/CategorySlideButton"

export default async function HotItemsSection() {
  const bigCategoryData = await getBigCategories()
  return (
    <section>
      <div className="flex justify-between px-4">
        <h1 className="text-[18px] font-bold ">지금 인기있는 상품이에요</h1>
        <Link href={"/best"} className="text-xs">
          전체보기 {">"}
        </Link>
      </div>
      {bigCategoryData && (
        <CategorySlideButton categories={bigCategoryData.bigCategories} />
      )}
    </section>
  )
}
