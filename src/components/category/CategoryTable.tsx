import { BigCategoriesData } from "@/actions/category/category"
import BigCategory from "./BigCategory"

export default function CategoryTable({
  bigCategoriesData,
}: {
  bigCategoriesData: BigCategoriesData
}) {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-5 pt-[15px] pr-[10px] pb-[25px] pl-[10px]">
        {bigCategoriesData.bigCategories.map((big) => (
          <div key={big.id} className="py-2 min-h-[80px]">
            <BigCategory
              bigCategoryId={big.id}
              bigCategoryName={big.name}
              bigCategoriesCount={bigCategoriesData.count}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
