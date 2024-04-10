import { MiddleCategories } from "@/actions/category/category"
import Link from "next/link"

export default function MiddleCategory({
  bigCategoryId,
  middleCategories,
}: {
  bigCategoryId: number
  middleCategories: MiddleCategories
}) {
  return (
    <div className="static left-0 overflow-hidden h-auto w-full">
      {middleCategories && (
        <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 my-[5px] box-border">
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/all"} passHref>
                상품 전체보기
              </Link>
            </p>
          </li>
          {middleCategories.map((mid) => (
            <li
              key={mid.id}
              className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]"
            >
              <p>
                <Link href={`/category/${bigCategoryId}/${mid.id}`} passHref>
                  {mid.name}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
