import SubCategorySlideButton from "@/components/category/SubCategorySlideButton"
import ProductList from "@/components/category/ProductList"
import SuperSubCategoryTable from "@/components/category/SuperSubCategoryTable"
import CategoryProductListToolBar from "@/components/category/CategoryProductListToolBar"
import {
  getBigCategoryName,
  getMidCategoryName,
  getMiddleCategories,
  getSmallCategories,
  getSmallCategoryName,
} from "@/actions/category/category"
import { redirect } from "next/navigation"
import { getCategoryItemsCount } from "@/actions/category/categoryItems"

function validSearchParams(searchParams: {
  big?: number
  mid?: number
  small?: number
}): boolean {
  /**
   * 하위 카테고리 id만으로 접근 불가
   * big -> 전체보기
   * big & mid -> 중분류까지
   * big & mid & small -> 소분류까지
   */
  if (searchParams.mid && !searchParams.big) {
    return false
  }
  if (searchParams.small && (!searchParams.mid || !searchParams.big)) {
    return false
  }
  return true
}

export default async function CategoryProductListPage({
  searchParams,
}: {
  searchParams: { big: number; mid: number; small: number }
}) {
  const categoryItemsCountData = await getCategoryItemsCount(
    searchParams.big,
    searchParams.mid,
    searchParams.small,
  )
  if (!validSearchParams(searchParams) || !categoryItemsCountData) {
    redirect("/not-found")
  }
  let bigCategoryName = ""
  let midCategoryName = ""
  let smallCategoryName = ""
  if (searchParams.big) {
    const res = await getBigCategoryName(searchParams.big)
    if (res) {
      bigCategoryName = res.categoryName
    }
  }
  if (searchParams.mid) {
    const res = await getMidCategoryName(searchParams.mid)
    if (res) {
      midCategoryName = res.categoryName
    }
  }
  if (searchParams.small) {
    const res = await getSmallCategoryName(searchParams.small)
    if (res) {
      smallCategoryName = res.categoryName
    }
  }

  const middleCategoriesData = await getMiddleCategories(searchParams.big)
  let smallCategoriesData = null
  if (searchParams.mid) {
    smallCategoriesData = await getSmallCategories(searchParams.mid)
  }
  let subCategories = middleCategoriesData
    ? middleCategoriesData.middleCategories
    : null
  if (searchParams.small) {
    subCategories = smallCategoriesData
      ? smallCategoriesData.smallCategories
      : null
  }
  let superSubCategories = smallCategoriesData
    ? smallCategoriesData.smallCategories
    : null

  return (
    <div className="min-h-screen">
      <div className="contents">
        <CategoryProductListToolBar
          bigCategoryName={bigCategoryName}
          midCategoryName={midCategoryName}
          smallCategoryName={smallCategoryName}
        />
        {subCategories && (
          <SubCategorySlideButton
            bigCtgId={searchParams.big}
            midCtgId={searchParams.mid}
            existingSmall={searchParams.small ? true : false}
            subCategories={subCategories}
          />
        )}
        {!searchParams.small && superSubCategories && (
          <SuperSubCategoryTable
            bigCtgId={searchParams.big}
            midCtgId={searchParams.mid}
            superSubCategories={superSubCategories}
            categoryItemsCount={categoryItemsCountData.count}
          />
        )}
      </div>
      <ProductList
        categoryIds={searchParams}
        categoryItemsCount={categoryItemsCountData.count}
      />
    </div>
  )
}
