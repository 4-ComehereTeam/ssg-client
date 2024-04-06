"use client"

import { deleteClip, postClip } from "@/actions/clip"
import { Color, Etc, Size } from "@/actions/itemOption"
import heartBorder from "@/public/asset/images/heart-border.png"
import heartFill from "@/public/asset/images/heart-fill.png"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import OptionDrawer from "./option/OptionDrawer"
import OptionSelector from "./option/OptionSelector"

type ItemBottomBarProps = {
  itemId: string
  isCliped: boolean
  colors: Color | null
  sizes: Size | null
  etcs: Etc | null
}

export default function ItemBottomBar({
  itemId,
  isCliped,
  colors,
  sizes,
  etcs,
}: ItemBottomBarProps) {
  const [clickHeart, setClickHeart] = useState(isCliped)
  const [showOptions, setShowOptions] = useState(false)
  const [showOptionDetail, setShowOptionDetail] = useState({
    color: false,
    size: false,
    etc: false,
  })
  const [selectedOption, setSelectedOption] = useState({
    color: "선택하세요. (색상)",
    size: "선택하세요. (사이즈)",
    etc: "선택하세요. (기타)",
  })

  const { status } = useSession()
  const router = useRouter()

  const handleHeart = async () => {
    const isClick = !clickHeart
    if (status === "authenticated") {
      if (isClick) {
        await postClip(itemId)
      } else {
        await deleteClip(Number(itemId))
      }
    } else {
      router.push("/member/signin")
    }
    setClickHeart(isClick)
  }

  const handleSelecteOption = (
    option: string,
    optionDetail: "color" | "size" | "etc",
  ) => {
    setSelectedOption({
      ...selectedOption,
      [optionDetail]: option,
    })
    setShowOptionDetail({
      ...showOptionDetail,
      [optionDetail]: !showOptionDetail[optionDetail],
    })
  }

  const toggleOptions = () => {
    const currentShowOptions = showOptions
    setShowOptions(!currentShowOptions)
    if (!currentShowOptions) {
      setShowOptionDetail({
        color: false,
        size: false,
        etc: false,
      })
      setSelectedOption({
        color: "선택하세요. (색상)",
        size: "선택하세요. (사이즈)",
        etc: "선택하세요. (기타)",
      })
    }
  }

  const toggleOptionDetail = (optionDetail: "color" | "size" | "etc") => {
    setShowOptionDetail({
      ...showOptionDetail,
      [optionDetail]: !showOptionDetail[optionDetail],
    })
  }

  console.log(selectedOption)

  return (
    <div className="relative z-10">
      <div
        className={`fixed bottom-0 w-full flex flex-row ${
          showOptions ? "z-20" : "z-10"
        }`}
      >
        {showOptions ? (
          <div className="grid grid-cols-2 w-full h-[52px] text-white">
            <button className="bg-black">장바구니</button>
            <button className="bg-[#ff5452]">바로구매</button>
          </div>
        ) : (
          <div className="w-full h-[52px] flex flex-row">
            <button
              className="w-[54px] bg-white flex justify-center items-center"
              onClick={handleHeart}
            >
              {status === "authenticated" && clickHeart ? (
                <Image
                  src={heartFill}
                  alt={"관심상품 등록"}
                  width={29}
                  height={29}
                />
              ) : (
                <Image
                  src={heartBorder}
                  alt={"관심상품 미등록"}
                  width={29}
                  height={29}
                />
              )}
            </button>
            <button
              className="flex-grow bg-[#ff5452] text-white"
              onClick={toggleOptions}
            >
              구매하기
            </button>
          </div>
        )}
      </div>
      <div
        className={`fixed bg-white bottom-[48px] w-full h-[40%] rounded-t-lg transform ${
          showOptions ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full">
          <div
            className="w-full h-[29px] rounded-t-lg flex justify-center"
            style={{
              boxShadow:
                "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)",
            }}
            onClick={toggleOptions}
          >
            {showOptions && (
              <Image
                width="0"
                height="0"
                src="https://img.icons8.com/ios/100/back--v1.png"
                alt="옵션 접기"
                style={{
                  transform: "rotate(-90deg)",
                  width: "20px",
                  height: "20px",
                }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col py-2 gap-3 text-sm">
          {colors && (
            <OptionSelector
              toggleOptionDetail={() => toggleOptionDetail("color")}
              selectedOption={selectedOption.color}
            />
          )}
          {sizes && (
            <OptionSelector
              toggleOptionDetail={() => toggleOptionDetail("size")}
              selectedOption={selectedOption.size}
            />
          )}
          {etcs && (
            <OptionSelector
              toggleOptionDetail={() => toggleOptionDetail("etc")}
              selectedOption={selectedOption.etc}
            />
          )}
        </div>
      </div>
      {colors && (
        <OptionDrawer
          optionSpecific="color"
          defaultOption="선택하세요. (색상)"
          options={colors.colors}
          showOptionDetailSpecific={showOptionDetail.color}
          toggleOptionDetail={() => toggleOptionDetail("color")}
          selectedOption={selectedOption.color}
          handleSelectedOption={handleSelecteOption}
        />
      )}
      {sizes && (
        <OptionDrawer
          optionSpecific="size"
          defaultOption="선택하세요. (사이즈)"
          options={sizes.sizes}
          showOptionDetailSpecific={showOptionDetail.size}
          toggleOptionDetail={() => toggleOptionDetail("size")}
          selectedOption={selectedOption.size}
          handleSelectedOption={handleSelecteOption}
        />
      )}
      {etcs && showOptionDetail.etc && (
        <OptionDrawer
          optionSpecific="etc"
          defaultOption="선택하세요. (기타)"
          options={etcs.etcs}
          showOptionDetailSpecific={showOptionDetail.etc}
          toggleOptionDetail={() => toggleOptionDetail("etc")}
          selectedOption={selectedOption.etc}
          handleSelectedOption={handleSelecteOption}
        />
      )}
    </div>
  )
}
