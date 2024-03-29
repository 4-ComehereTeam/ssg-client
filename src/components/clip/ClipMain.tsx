"use client"

import { useState } from "react"
import ItemCard from "../ui/ItemCard"
import Checkbox from "../ui/Checkbox"
import Tooltip from "../ui/Tooltip"
import controlBar from "@/public/asset/images/control-bar.png"
import Image from "next/image"
import { deleteManyClips } from "@/actions/clip"

//itemIds는 서버에서 받아와야함
type ClipMainPropsType = {
  itemIds: number[]
}

export default function ClipMain({ itemIds }: ClipMainPropsType) {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [clicks, setClicks] = useState<boolean[]>(
    Array.from({ length: itemIds.length }, () => false),
  )
  const [allCheck, setAllCheck] = useState<boolean>(false)
  const [openInfo, setOpenInfo] = useState<boolean>(false)
  const editItemIds: number[] = []

  //클릭 안먹음
  const handleClick = (index: number) => {
    const updatedClicks = clicks.map((click, i) =>
      i === index ? !click : click,
    )

    if (updatedClicks[index]) {
      editItemIds.push(itemIds[index]) //TODO: itemIds에 안담기는거 해결하기
    }

    const newCount = updatedClicks.filter((click) => click).length
    setCount(newCount)

    // 모든 아이템이 체크되었는지 확인 후 allCheck 상태 업데이트
    const isAllChecked = updatedClicks.every((click) => click)
    setAllCheck(isAllChecked)
  }

  const handleAllclicks = () => {
    const newAllCheck = !allCheck // 현재 allCheck의 반대 값
    const updatedClicks = clicks.map(() => newAllCheck)
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? itemIds.length : 0)
  }

  const handleEditMode = () => {
    const updatedMode = !editMode
    setCount(0)
    const iniClicks = clicks.map(() => false)
    setClicks(iniClicks)
    setEditMode(updatedMode)
  }

  const handleDeleteButton = async () => {
    await deleteManyClips(1, editItemIds)
  }

  return (
    <section className="relative">
      <div className="mt-3 px-4">
        {editMode ? (
          <ul className="flex flex-row justify-between items-center text-xs text-center h-6">
            <li className="flex items-center gap-1">
              <Checkbox
                id="allCheck"
                text=""
                onChange={handleAllclicks}
                checked={allCheck}
                isDisabled={false}
                checkboxShape="square w-[19px] h-[19px]"
              />
              <span>
                {count}/{itemIds.length}
              </span>
            </li>
            <li>
              <button
                className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1.5"
                onClick={handleEditMode}
              >
                취소
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-row justify-between items-center text-xs text-center h-6">
            <li>
              <button
                className="relative flex flex-col gap-1 w-48 h-10 justify-center"
                onClick={() => setOpenInfo(!openInfo)}
              >
                <div className="sticky top-0 flex flex-row gap-1">
                  상품 안내
                  <div className="rounded-full border border-zinc-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="12px"
                      height="12px"
                      viewBox="0 0 64 64"
                    >
                      <g>
                        <path
                          fill="#A1AAA1"
                          d="M 25.5,7.5 C 34.3239,5.43992 41.1572,8.10658 46,15.5C 46.8538,19.6251 46.5204,23.6251 45,27.5C 42,30.5 39,33.5 36,36.5C 34.9562,38.7148 34.2895,41.0481 34,43.5C 32,44.8333 30,44.8333 28,43.5C 27.5082,38.6397 28.8416,34.3063 32,30.5C 42.0731,23.89 41.9064,17.89 31.5,12.5C 29.4595,13.2357 27.4595,14.0691 25.5,15C 24.2921,17.2503 22.9587,19.417 21.5,21.5C 18.5604,22.8589 16.8937,21.8589 16.5,18.5C 17.7084,13.2982 20.7084,9.63158 25.5,7.5 Z"
                        />
                      </g>
                      <g>
                        <path
                          fill="#A1AAA1"
                          d="M 28.5,48.5 C 34.1581,47.6794 35.8248,49.846 33.5,55C 27.741,56.1387 26.0744,53.972 28.5,48.5 Z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                {openInfo && (
                  <Tooltip
                    className="col-start-1 col-end-3 w-48"
                    text="좋아요에 담긴 상품은 최대 5년 보관합니다."
                  />
                )}
              </button>
            </li>
            <li>
              <button
                className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1"
                onClick={handleEditMode}
              >
                <Image
                  src={controlBar}
                  alt={"관심상품 편집"}
                  width={15}
                  className="mr-1"
                />
                편집
              </button>
            </li>
          </ul>
        )}
        {editMode && (
          <div className="z-10 right-0 fixed bottom-0 w-full grid grid-cols-2 h-12 text-white tracking-tighter">
            <button className="bg-[#222222]">폴더에 추가</button>
            <button className="bg-[#FF5452]" onClick={handleDeleteButton}>
              삭제
            </button>
            {/* 
            좋아요 삭제는 clicks배열과 itemIds배열을 인덱스로 매칭해서
            삭제할 상품 id가 담긴 배열을 만들고 서버에 보내줌
            그 다음 페이지 리로딩
            */}
          </div>
        )}
        {itemIds.length === 0 ? (
          <div className="flex justify-center items-center h-40 text-sm text-[#959595]">
            <p>아직 좋아요한 상품이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-between">
            {itemIds.map((itemId, index) => (
              <div key={itemId} className="w-full h-full">
                {editMode && (
                  // Link로 둘러싸고 상품 데이터 불러오는지 확인해오기
                  <Checkbox
                    id={"item" + itemId.toString()}
                    text=""
                    onChange={() => handleClick(index)}
                    checked={allCheck || clicks[index]}
                    isDisabled={false}
                    checkboxShape="square absolute mt-2 w-[19px] h-[19px]"
                  />
                )}
                <ItemCard itemId={itemId} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
