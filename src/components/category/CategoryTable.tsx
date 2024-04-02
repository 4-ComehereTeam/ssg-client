"use client"

import { lCategoryDummy } from "@/lib/lCategoryDummy"
import { largeCategoryType } from "@/types/largeCategoryType"
import React, { useState } from "react"
import GroupNav from "./GroupNav"

export default function CategoryTable() {
  const [selectedLCategory, setSelectedLCategory] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<Boolean[]>(
    Array(lCategoryDummy.length).fill(false),
  )

  const handleOpen = (e: React.MouseEvent<HTMLLIElement>) => {
    const role = e.currentTarget.getAttribute("role")
    if (role) {
      const index = parseInt(role)
      if (!isOpen[index]) {
        setIsOpen((prev) => {
          return prev.map((item, idx) => {
            return index === idx ? !item : false
          })
        })
      }
    }
  }
  return (
    <div>
      <div className="h-screen">
        <div className="pt-[15px] pr-[10px] pb-[25px] pl-[10px]">
          {lCategoryDummy
            .reduce((acc: largeCategoryType[][], item, index) => {
              const groupIndex = Math.floor(index / 5)
              if (!acc[groupIndex]) {
                acc[groupIndex] = []
              }
              acc[groupIndex].push(item)
              return acc
            }, [])
            .map((group, groupIndex) => (
              <div className="py-2 min-h-[80px]" key={groupIndex}>
                <GroupNav
                  group={group}
                  gx={groupIndex}
                  handleOpen={(e) => {
                    handleOpen(e)
                    setSelectedLCategory(
                      parseInt(e.currentTarget.getAttribute("value") ?? "0"),
                    )
                  }}
                  selectedLCategory={selectedLCategory}
                  isOpen={isOpen[groupIndex]}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
