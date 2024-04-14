"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import ClipCancleButton from "../ClipCancleButton"
import ClipEditButton from "../ClipEditButton"
import ClipInfoButton from "../ClipInfoButton"
import ClipCategoryCard from "./ClipCategoryCard"
import { ClipCategoryIds } from "@/actions/clip/categoryClip"
import CategoryEditBar from "./CategoryEditBar"

type ClipCategoriesProps = {
  clipCategories: ClipCategoryIds
}

export default function ClipCategoriesMain({
  clipCategories,
}: ClipCategoriesProps) {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState<{ [key: number]: boolean }>(
    Array(clipCategories.length).reduce((obj, e, index) => {
      obj[index] = false
      return obj
    }, {}),
  )
  const [allCheck, setAllCheck] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  //개별 체크박스 클릭
  const handleClick = (index: number) => {
    const updatedClicks = { ...clicks, [index]: !clicks[index] }
    const newCount = Object.values(updatedClicks).filter(
      (click) => click,
    ).length
    setCount(newCount)

    const isAllChecked = Object.values(updatedClicks).every((click) => click)
    setAllCheck(isAllChecked)

    setClicks(updatedClicks)
  }

  //전체 체크박스 클릭
  const handleAllClicks = () => {
    const newAllCheck = !allCheck
    const updatedClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = newAllCheck
      return acc
    }, {} as { [key: number]: boolean })
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? clipCategories.length : 0)
  }

  //편집 클릭
  const handleEditMode = () => {
    const updatedMode = !isEditMode
    setCount(0)
    const iniClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = false
      return acc
    }, {} as { [key: number]: boolean })
    setClicks(iniClicks)
    setIsEditMode(updatedMode)
  }

  const clickItemIds = Object.keys(clicks)
    .filter((index) => clicks[parseInt(index)] === true)
    .map((index) => clipCategories[parseInt(index)])

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
  console.log(clicks)
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
            <CategoryEditBar clickCategoryIds={clickItemIds} />
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
                    checked={clicks[index]}
                    isDisabled={false}
                    checkboxShape="square ml-6 w-[19px] h-[19px]"
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
