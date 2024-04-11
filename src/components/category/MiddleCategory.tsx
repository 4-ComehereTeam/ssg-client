"use client"

import { Categories } from "@/actions/category/category"
import Link from "next/link"

export default function MiddleCategory({
  bigCategoryId,
  middleCategories,
}: {
  bigCategoryId: number | undefined
  middleCategories: Categories
}) {
  return (
    <div className=" h-auto w-[100vw] animate-fade-in">
      <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 box-border">
        <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
          <p>
            <Link href={`/category-items?big=${bigCategoryId}`} passHref>
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
              <Link
                href={`/category-items?big=${bigCategoryId}&mid=${mid.id}`}
                passHref
              >
                {mid.name}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
