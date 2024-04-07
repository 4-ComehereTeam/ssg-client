"use client"

import { deleteClip, postClip } from "@/actions/clip"
import {
  getItemOptionColor,
  getItemOptionEtc,
  getItemOptionSize,
  Options,
} from "@/actions/itemOption"
import heartBorder from "@/public/asset/images/heart-border.png"
import heartFill from "@/public/asset/images/heart-fill.png"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import OptionDrawer from "./option/OptionDrawer"
import OptionSelector from "./option/OptionSelector"
import { convertedOptionExistType } from "@/app/(footer)/item/[itemId]/page"

type ItemBottomBarProps = {
  itemId: string
  isCliped: boolean
  optionExist: convertedOptionExistType
}

//옵션 종류별 기본 선택 값
export const defaultOption = {
  color: { value: "선택하세요. (색상)", id: 0, optionId: 0 },
  size: { value: "선택하세요. (사이즈)", id: 0, optionId: 0 },
  etc: { value: "선택하세요. (기타)", id: 0, optionId: 0 },
}

export default function ItemBottomBar({
  itemId,
  isCliped,
  optionExist,
}: ItemBottomBarProps) {
  const { status } = useSession()
  const router = useRouter()
  const [clickHeart, setClickHeart] = useState(isCliped)
  const [showOptions, setShowOptions] = useState(false)

  //옵션 선택 창
  const [showOptionDetail, setShowOptionDetail] = useState({
    color: false,
    size: false,
    etc: false,
  })

  //상세 옵션
  const [optionDetail, setOptionDetail] = useState<Options | null>(null)

  //선택된 옵션
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const lastOptionIdx = Object.values(optionExist).lastIndexOf(true)

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

  //옵션 창 열고 닫기
  const toggleOptions = () => {
    const currentShowOptions = showOptions
    setShowOptions(!currentShowOptions)
    if (!currentShowOptions) {
      setSelectedOption({
        color: defaultOption.color,
        size: defaultOption.size,
        etc: defaultOption.etc,
      })
    }
  }

  //상세 옵션 데이터 페칭
  const getOptionDetailData = async (optionName: "color" | "size" | "etc") => {
    if (optionName === "color") {
      const colorData = await getItemOptionColor(itemId)
      setOptionDetail(colorData ?? null)
    } else if (optionName === "size") {
      const sizeData = await getItemOptionSize(itemId, selectedOption.color.id)
      setOptionDetail(sizeData ?? null)
    } else if (optionName === "etc") {
      const etcData = await getItemOptionEtc(
        itemId,
        selectedOption.color.id,
        selectedOption.size.id,
      )
      setOptionDetail(etcData ?? null)
    }
  }

  //상세 옵션 선택 상세 옵션 창 열고 닫기
  const handleOptionDetail = (
    optionName: "color" | "size" | "etc",
    optionObject: { value: string; id: number; optionId: number },
  ) => {
    setShowOptionDetail({
      ...showOptionDetail,
      [optionName]: !showOptionDetail[optionName],
    })
    setSelectedOption({
      ...selectedOption,
      [optionName]: optionObject,
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
          {optionExist &&
            Object.keys(optionExist).map((key) => {
              const optionKey = key as "color" | "size" | "etc"
              if (optionExist[optionKey]) {
                return (
                  <div
                    key={optionKey}
                    onClick={() => getOptionDetailData(optionKey)}
                  >
                    <OptionSelector
                      handleOptionDetail={() =>
                        handleOptionDetail(optionKey, selectedOption[optionKey])
                      }
                      selectedOption={selectedOption[optionKey]}
                    />
                  </div>
                )
              }
            })}
        </div>
      </div>
      {optionExist &&
        Object.keys(optionExist).map((key, index) => {
          const optionKey = key as "color" | "size" | "etc"
          if (optionExist[optionKey]) {
            return (
              <div key={optionKey}>
                <OptionDrawer
                  optionName={optionKey}
                  optionDetail={optionDetail}
                  defaultOption={defaultOption[optionKey]}
                  showOptionDrawer={showOptionDetail[optionKey]}
                  handleOptionDetail={handleOptionDetail}
                  selectedOption={selectedOption[optionKey]}
                  isLast={index === lastOptionIdx}
                />
              </div>
            )
          }
        })}
    </div>
  )
}
