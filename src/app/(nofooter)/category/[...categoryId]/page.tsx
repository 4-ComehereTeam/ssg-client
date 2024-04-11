import SubCategorySlideButton from "@/components/category/SubCategorySlideButton"
import ProductList from "@/components/category/ProductList"
import SubCategoryTable from "@/components/category/SubCategoryTable"
import CategoryProductListToolBar from "@/components/category/CategoryProductListToolBar"
export default function CategoryProductListPage({
  params,
}: {
  params: string[]
}) {
  //params의 뒤 2개 id만 가지고 api 호출
  console.log("params:", params)
  return (
    <div className="min-h-screen">
      <div className="contents">
        <CategoryProductListToolBar />
        <SubCategorySlideButton />
        <SubCategoryTable />
      </div>
      <div className="col-start-2 col-end-auto">
        <div className="text-xs flex ps-4 pe-4 pt-3">
          <div className="font-bold">~개</div>
          <div className="text-gray-500">의 상품이 있습니다.</div>
        </div>
        <ProductList />
      </div>
    </div>
  )
}
