"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import ClipCancleButton from "../ClipCancleButton"
import ClipEditButton from "../ClipEditButton"
import ClipInfoButton from "../ClipInfoButton"
import ClipCategoryCard from "./ClipCategoryCard"
import { ClipCategoryIds } from "@/actions/categoryClip"
import CategoryEditBar from "./CategoryEditBar"

type ClipCategoriesProps = {
  clipCategories: ClipCategoryIds
}

export default function ClipCategoriesMain({
  clipCategories,
}: ClipCategoriesProps) {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState<boolean[]>(
    Array(clipCategories.length).fill(false),
  )
  const [allCheck, setAllCheck] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  //개별 체크박스 클릭
  const handleClick = (index: number) => {
    const updatedClicks = [...clicks]
    updatedClicks[index] = !updatedClicks[index]
    const newCount = updatedClicks.filter((click) => click).length
    setCount(newCount)

    const isAllChecked = updatedClicks.every((click) => click)
    setAllCheck(isAllChecked)

    setClicks(updatedClicks)
  }

  //전체 체크박스 클릭
  const handleAllClicks = () => {
    const newAllCheck = !allCheck
    const updatedClicks = clicks.fill(newAllCheck)
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? clipCategories.length : 0)
  }

  //편집 클릭
  const handleEditMode = () => {
    const updatedMode = !isEditMode
    setCount(0)
    const iniClicks = clicks.fill(false)
    setClicks(iniClicks)
    setIsEditMode(updatedMode)
  }

  const clickItemIds = Object.keys(clicks)
    .filter((itemId) => clicks[parseInt(itemId)] === true)
    .map((itemId) => parseInt(itemId))

  if (clipCategories.length === 0) {
    return (
      <section className="relative">
        <div className="mt-3 px-4 text-sm">
          <div className="flex justify-center items-center h-40 text-sm text-[#959595]">
            <p>아직 좋아요한 카테고리가 없습니다.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative">
      <div className="mt-3 px-4 text-sm">
        {isEditMode ? (
          <>
            <div className="flex flex-row justify-between items-center">
              <Checkbox
                id="editClip"
                text={count.toString() + "/" + clipCategories.length.toString()}
                onChange={() => handleAllClicks()}
                checked={allCheck}
                isDisabled={false}
                checkboxShape="squre w-[19px] h-[19px]"
              />
              <ClipCancleButton onEditMode={() => handleEditMode()} />
            </div>
            {/* <CategoryEditBar clickCategoryIds={} /> */}
          </>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <ClipInfoButton />
            <ClipEditButton onEditMode={() => handleEditMode()} />
          </div>
        )}

        <div className="mt-4">
          {clipCategories.map((ctg, index) => (
            <div key={`clipCategory-${index}`}>
              <ClipCategoryCard clipCategory={ctg}>
                {isEditMode && (
                  <Checkbox
                    id={`${ctg.bigCategoryId}-${ctg.middleCategoryId}-${ctg.smallCategoryId}`}
                    text=""
                    onChange={() => handleClick(index)}
                    checked={allCheck || clicks[index]}
                    isDisabled={false}
                    checkboxShape="absolute square mt-2 w-[19px] h-[19px]"
                  />
                )}
              </ClipCategoryCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
