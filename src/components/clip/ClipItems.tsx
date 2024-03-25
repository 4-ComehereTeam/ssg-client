"use client"

import { useState } from "react"
import ItemCard from "../ui/ItemCard"
import Checkbox from "../ui/Checkbox"

//items는 서버에서 받아와야함
const itemIds = [1, 2, 3, 4]

export default function ClipItems() {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [clicks, setClicks] = useState<boolean[]>(
    Array.from({ length: itemIds.length }, () => false),
  )
  const [allCheck, setAllCheck] = useState<boolean>(false)

  const handleClick = (index: number) => {
    const updatedClicks = clicks.map((click, i) =>
      i === index ? !click : click,
    )

    const newCount = updatedClicks.filter((click) => click).length
    setCount(newCount)

    setClicks(updatedClicks)

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
            <li className="flex items-center gap-1">
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
            </li>
            <li>
              <button
                className="border border-zinc-200 rounded bg-white flex flex-row px-2 py-1"
                onClick={handleEditMode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      fill="#49545e"
                      d="M 375.5,148.5 C 410.307,147.807 427.14,164.807 426,199.5C 418.864,224.997 402.031,236.497 375.5,234C 350.003,226.864 338.503,210.031 341,183.5C 345.348,164.653 356.848,152.986 375.5,148.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#48535f"
                      d="M 102.5,169.5 C 169.167,169.333 235.834,169.5 302.5,170C 316.355,174.531 321.855,184.031 319,198.5C 315.977,206.192 310.477,211.025 302.5,213C 235.833,213.667 169.167,213.667 102.5,213C 88.5785,209.063 82.7451,199.896 85,185.5C 87.8606,176.802 93.694,171.468 102.5,169.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#49545e"
                      d="M 119.5,276.5 C 154.307,275.807 171.14,292.807 170,327.5C 162.864,352.997 146.031,364.497 119.5,362C 94.0027,354.864 82.5027,338.031 85,311.5C 89.3477,292.653 100.848,280.986 119.5,276.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#48535e"
                      d="M 208.5,297.5 C 275.167,297.333 341.834,297.5 408.5,298C 425.05,303.269 430.216,314.102 424,330.5C 420.474,336.352 415.307,339.852 408.5,341C 341.833,341.667 275.167,341.667 208.5,341C 194.645,336.469 189.145,326.969 192,312.5C 195.198,304.795 200.698,299.795 208.5,297.5 Z"
                    />
                  </g>
                </svg>
                편집
              </button>
            </li>
          </ul>
        )}
        {editMode && (
          <div className="z-10 right-0 fixed bottom-0 w-full grid grid-cols-2 h-12 text-white tracking-tighter">
            <button className="bg-[#222222]">폴더에 추가</button>
            <button className="bg-[#FF5452]">삭제</button>
            {/* 
            좋아요 삭제는 clicks배열과 itemIds배열을 인덱스로 매칭해서
            삭제할 상품 id가 담긴 배열을 만들고 서버에 보내줌
            그 다음 페이지 리로딩
            */}
          </div>
        )}
        <div className="flex flex-row gap-1 flex-wrap justify-between">
          {itemIds.map((itemId, index) => (
            <div key={itemId} className="w-[49%]">
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
      </div>
    </section>
  )
}
