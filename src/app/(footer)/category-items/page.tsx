import SubCategorySlideButton from "@/components/category/SubCategorySlideButton"
import ProductList from "@/components/category/ProductList"
import SuperSubCategoryTable from "@/components/category/SuperSubCategoryTable"
import CategoryToolBar from "@/components/category/CategoryToolBar"
import {
  getBigCategoryName,
  getMidCategoryName,
  getMiddleCategories,
  getSmallCategories,
  getSmallCategoryName,
} from "@/actions/category/category"
import { redirect } from "next/navigation"
import { getCategoryItemsCount } from "@/actions/category/categoryItems"
import HeaderWithSearchBar from "@/components/ui/Headers/HeaderWithSearchBar"

type searchParamsType = {
  big?: number
  mid?: number
  small?: number
}

/**
 * 하위 카테고리 id만으로 접근 불가
 * big -> 전체보기
 * big & mid -> 중분류까지
 * big & mid & small -> 소분류까지
 */
function validSearchParams(searchParams: searchParamsType): boolean {
  if (searchParams.mid && !searchParams.big) {
    return false
  }
  if (searchParams.small && (!searchParams.mid || !searchParams.big)) {
    return false
  }
  return true
}

async function categoryNameFilter(searchParams: searchParamsType) {
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
  return {
    big: { id: searchParams.big, name: bigCategoryName },
    mid: { id: searchParams.mid, name: midCategoryName },
    small: { id: searchParams.small, name: smallCategoryName },
  }
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

  const categoryNames = await categoryNameFilter(searchParams)

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
      <HeaderWithSearchBar />
      <div className="contents">
        <CategoryToolBar
          bigCategory={categoryNames.big}
          midCategory={categoryNames.mid}
          smallCategory={categoryNames.small}
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
