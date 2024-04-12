"use client"

// import { getCategories } from "@/actions/category/category"
import Image from "next/image"
import React, { useState, useRef } from "react"

export default function MainSlideButton() {
  // 카테고리 페이지에서 선택한 중분류 카테고리 값이 주어지면 됩니다.
  const [isSelected, setIsSelected] = useState()

  const buttonRefs = useRef<HTMLButtonElement[]>([])

  /** useRef를 사용하여 선택된 값이 중앙으로 오도록 설정 */
  // const handleCategoryClick = (category: number, index: number) => {
  //   setIsSelected(category);
  //   buttonRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  // }

  /** 전체 카테고리 모달 관련 state와 함수입니다. 
      당장 적용하기에는 조금 수정이 필요할 거 같아서 추가하고 수정해서 알려드릴게요.
    const [isOpenAllCategory, setIsOpenAllCategory] = useState(false);

    const handleOpenAllCategory = () => {
      setIsOpenAllCategory(true);
    }; 

    const handleCloseAllCategoryList = () => {
      setIsOpenAllCategory(false);
    };
  */

  return (
    <div className="col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] bg-white sticky top-[46px] z-50">
      <div className="flex-start flex-shrink-0 align-middle relative pr-[54px]">
        <div className="h-[56px] overflow-hidden text-nowrap flex">
          <div className="flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-scroll scrollbar-hide">
            <button
              className={`min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black`}
            >
              패션의류
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              패션잡화
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              명품
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              뷰티
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              스포츠/레저
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              생활/주방
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              가구/인테리어
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              유아동
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              디지털/렌탈
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              신선식품
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              가공/건강식품
            </button>
            <button className="min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 bg-white border-[1px] text-black">
              반려동물
            </button>
          </div>
          {/* {
            categories.map((category, idx) => {
              if (category.title === '') {
                return;
              }
              return (
                <button
                  key={idx}
                  ref={el => buttonRefs.current[idx] = el!}
                  onClick={() => { handleCategoryClick(category.id, idx) }}
                  className={`min-w-min h-[36px] text-xs font-semibold mr-[5px] pl-2 pr-2 
                  ${isSelected === category.id ? 'bg-black text-white border-black' : 'bg-gray-100 text-black'}`}>
                  // 선택 시 스타일 변경되는 부분입니다. state 설정 후 활성화시키시면 될겁니다.
                  {category.title} 
                </button>
              )
            })
          } */}
          <div className="bg-white top-[10px] absolute bottom-[10px] right-0 pr-4">
            <button
              // onClick={handleOpenAllCategory}
              className="min-w-9 min-h-9 rotate-90 inline-flex items-center justify-center text-sm border border-gray-200"
            >
              <div className="w-[18px] h-[18px] text-black font-bold">
                <Image
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                  className="-rotate-90"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
