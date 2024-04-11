"use client"

import { MiddleCategories } from "@/actions/category/category"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MiddleCategory({
  bigCategoryId,
  middleCategories,
  isOpen,
}: {
  bigCategoryId: number | undefined
  middleCategories: MiddleCategories
  isOpen: boolean
}) {
  return (
    <div className="h-auto w-[100vw] animate-fade-in">
      {middleCategories && (
        <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 box-border">
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={`/category/${bigCategoryId}`} passHref>
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
