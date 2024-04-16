"use client"

import { Categories } from "@/actions/category/category"
import Link from "next/link"
import React from "react"

export default function SuperSubCategoryTable({
  bigCtgId,
  midCtgId,
  superSubCategories,
  categoryItemsCount,
}: {
  bigCtgId: number
  midCtgId: number
  superSubCategories: Categories
  categoryItemsCount: number
}) {
  if (categoryItemsCount)
    return (
      <div className="col-start-2 col-end-auto ms-1 me-1">
        <div className="grid-cols-3 grid border-t-[1px] border-gray-200 ">
          {superSubCategories.map((superSubCtg) => (
            <Link
              key={superSubCtg.id}
              href={`categoryItems?big=${bigCtgId}&mid=${midCtgId}&small=${superSubCtg.id}`}
              className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]"
            >
              <span className="overflow-hidden text-ellipsis text-xs">
                {superSubCtg.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    )
}
