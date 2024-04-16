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
    clipCategories.reduce((acc, ctg) => {
      acc[ctg.id] = false
      return acc
    }, {} as { [key: number]: boolean }),
  )

  const [allCheck, setAllCheck] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  //개별 체크박스 클릭
  const handleClick = (id: number) => {
    const updatedClicks = { ...clicks, [id]: !clicks[id] }
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
    const updatedClicks = clipCategories.reduce((acc, ctg) => {
      acc[ctg.id] = newAllCheck
      return acc
    }, {} as { [key: string]: boolean })
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? clipCategories.length : 0)
  }

  //편집 클릭
  const handleEditMode = () => {
    setCount(0)
    const iniClicks = clipCategories.reduce(
      (acc, { bigCategoryId, middleCategoryId, smallCategoryId }) => {
        const key = `${bigCategoryId}-${middleCategoryId ?? ""}-${
          smallCategoryId ?? ""
        }`
        acc[key] = false
        return acc
      },
      {} as { [key: string]: boolean },
    )
    setClicks(iniClicks)
    setIsEditMode(!isEditMode)
    if (isEditMode) {
      setAllCheck(false)
    }
  }

  const clickCategoryIds = Object.keys(clicks)
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
            <CategoryEditBar clickCategoryIds={clickCategoryIds} />
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
                    checked={allCheck || clicks[index] || false}
                    isDisabled={false}
                    checkboxShape="absolute mt-5 square w-[19px] h-[19px]"
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
