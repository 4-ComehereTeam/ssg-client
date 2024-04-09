"use client"

import { deleteClip, postClip } from "@/actions/clip"
import {
  getItemNoneOption,
  getItemOption,
  getItemOptionColor,
  getItemOptionEtc,
  getItemOptionSize,
  ItemOption,
  Options,
  OptionSepcific,
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
import SelectedItemOptionCard from "./option/SelectedItemOptionCard"
import { ItemBasicInfo } from "@/actions/item"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../shadcnUI/alert-dialog"
import SelectedItemCard from "./option/SelectedItemCard"
// import SeletedItemCard from "./option/SeletedItemCard"

type ItemBottomBarProps = {
  itemId: string
  itemBasicInfo: ItemBasicInfo | null
  isCliped: boolean
  optionExist: convertedOptionExistType
}

export type OptionName = "color" | "size" | "etc"

export type ItemOptions = (ItemOption & { count: number })[]

const optionOrder: OptionName[] = ["color", "size", "etc"]

//옵션 종류별 기본 선택 값
export const defaultOption = {
  color: { value: "선택하세요. (색상)", id: 0, optionId: 0, stock: 0 },
  size: { value: "선택하세요. (사이즈)", id: 0, optionId: 0, stock: 0 },
  etc: { value: "선택하세요. (기타)", id: 0, optionId: 0, stock: 0 },
}

export default function ItemBottomBar({
  itemId,
  itemBasicInfo,
  isCliped,
  optionExist,
}: ItemBottomBarProps) {
  const { status } = useSession()
  const router = useRouter()
  const lastOptionIdx = Object.values(optionExist).lastIndexOf(true)
  const [clickHeart, setClickHeart] = useState(isCliped)
  const [showOptions, setShowOptions] = useState(false)

  //OptionSelector 열고 닫기
  const [showOptionSelector, setShowOptionSelector] = useState({
    color: false,
    size: false,
    etc: false,
  })

  //OptionDrawer 열고 닫기
  const [showOptionDetail, setShowOptionDetail] = useState({
    color: false,
    size: false,
    etc: false,
  })

  //상세 옵션
  const [optionDetail, setOptionDetail] = useState<Options | null>(null)

  //선택된 옵션
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  //옵션 별 상품 담은 배열
  const [itemOptions, setItemOptions] = useState<ItemOptions>([])

  //주문 요청 응답 메시지
  const [purchaseResponseMessage, setPurchaseResponseMessage] = useState("")

  const discountRate = itemBasicInfo ? itemBasicInfo.discountRate : 0
  const price = itemBasicInfo ? itemBasicInfo.price : 0
  const discountPrice =
    discountRate !== 0 ? price * ((100 - discountRate) / 100) : price
  const totalPrice = new Intl.NumberFormat().format(
    discountPrice *
      itemOptions.reduce((sum, itemOption) => sum + itemOption.count, 0),
  )

  const isExistAnyOption = Object.values(optionExist).some((exist) => exist)

  const isTwoOrMoreTrueOption =
    Object.values(optionExist).filter((value) => value === true).length >= 2

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

  //옵션 창 열고 닫기 & 옵션 없는 상품 데이터 페칭
  const toggleOptions = async () => {
    setShowOptions(!showOptions)
    if (!showOptions) {
      setSelectedOption({
        color: defaultOption.color,
        size: defaultOption.size,
        etc: defaultOption.etc,
      })
      setItemOptions([])
    }

    if (!isExistAnyOption) {
      const itemNoneOption = await getItemNoneOption(itemId)
      if (itemNoneOption) {
        setItemOptions([
          {
            itemOptionId: itemNoneOption.itemOptionId,
            color: null,
            size: null,
            etc: null,
            stock: itemNoneOption.stock,
            count: 1,
          },
        ])
      }
    }
  }

  //상세 옵션 데이터 페칭
  const getOptionDetailData = async (optionName: OptionName) => {
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
      console.log(etcData)
      setOptionDetail(etcData ?? null)
    }
  }

  const toggleOptionSelector = (optionName: OptionName) => {
    setShowOptionSelector({
      ...showOptionSelector,
      [optionName]: !showOptionSelector[optionName],
    })
    setShowOptionDetail({
      ...showOptionDetail,
      [optionName]: !showOptionDetail[optionName],
    })
  }

  //상세 옵션 선택 & 상세 옵션 창 열고 닫기
  const handleOptionDetail = async (
    optionName: OptionName,
    optionObject: OptionSepcific,
  ) => {
    setShowOptionDetail({
      ...showOptionDetail,
      [optionName]: !showOptionDetail[optionName],
    })

    // 이전과 다른 옵션 선택 시 뒤의 모든 옵션을 초기화
    const newSelectedOption = { ...selectedOption, [optionName]: optionObject }

    if (selectedOption[optionName].optionId !== optionObject.optionId) {
      const startIndex = optionOrder.indexOf(optionName) + 1
      for (let i = startIndex; i < optionOrder.length; i++) {
        const resetOptionName = optionOrder[i]
        newSelectedOption[resetOptionName] = defaultOption[resetOptionName]
      }
    }
    setSelectedOption(newSelectedOption)

    //마지막 옵션 선택 시 옵션 정보 데이터 페칭 & itemOptions에 추가
    if (optionOrder.indexOf(optionName) === lastOptionIdx) {
      const newItemOption = await getItemOption(
        newSelectedOption[optionName].optionId,
      )
      if (newItemOption) {
        const existsItemOption = itemOptions.find(
          (option) => option.itemOptionId === newItemOption.itemOptionId,
        )
        const countedItemOption = { ...newItemOption, count: 1 }
        if (!existsItemOption) {
          setItemOptions([countedItemOption, ...itemOptions])
        } else {
          const increasedCountItemOptions = itemOptions.map((itemOption) =>
            itemOption.itemOptionId === existsItemOption.itemOptionId &&
            itemOption.count < itemOption.stock
              ? { ...itemOption, count: itemOption.count + 1 }
              : itemOption,
          )
          setItemOptions(increasedCountItemOptions)
        }
      }
    }
  }

  //itemOptions 삭제 & selectedOption 초기화
  const deleteItemOption = (index: number) => {
    //itemOptions배열에서 index번째 원소 삭제
    const newItemOptions = itemOptions.filter((_, i) => i !== index)
    setItemOptions(newItemOptions)

    if (newItemOptions.length === 0 && isExistAnyOption) {
      setSelectedOption({
        color: defaultOption.color,
        size: defaultOption.size,
        etc: defaultOption.etc,
      })
    }
  }

  //itemOption count 수정
  const handleItemOptionCount = (itemOptionId: number, count: number) => {
    const newItemOptions = itemOptions.map((itemOption) =>
      itemOption.itemOptionId === itemOptionId &&
      itemOption.stock >= count &&
      count > 0
        ? { ...itemOption, count: count }
        : itemOption,
    )
    setItemOptions(newItemOptions)
  }

  const buy = async () => {
    if (status == "unauthenticated") {
      router.push("/member/signin")
    } else {
      if (itemOptions.length > 0) {
        const queryString =
          `?itemId=${itemId}&` +
          itemOptions
            .map(
              (itemOption) =>
                `itemOptionId=${itemOption.itemOptionId}&count=${itemOption.count}`,
            )
            .join("&")
        router.push("/order" + queryString)
      } else {
        setPurchaseResponseMessage("옵션을 선택해주세요.")
      }
    }
  }

  return (
    <div className="relative z-10">
      <div className={`fixed bottom-0 w-full ${showOptions ? "z-20" : "z-10"}`}>
        {showOptions ? (
          <div className="flex flex-col">
            {itemOptions.length !== 0 &&
              itemOptions[itemOptions.length - 1].stock !== 0 && (
                <div className="z-50 py-4 w-full pr-2 bottom-[104px] flex flex-row justify-end bg-white">
                  <strong className="flex flex-col justify-end mb-1 mr-1">
                    총합계
                  </strong>
                  <strong className="text-[25px] text-[#ff5452]">
                    {itemBasicInfo && itemBasicInfo.price && totalPrice}원
                  </strong>
                </div>
              )}

            <div className="grid grid-cols-2 w-full h-[52px] text-white">
              <button className="bg-black">장바구니</button>

              <AlertDialog>
                <AlertDialogTrigger
                  className="bg-[#ff5452]"
                  onClick={() => buy()}
                >
                  바로구매
                </AlertDialogTrigger>
                {purchaseResponseMessage.length !== 0 && (
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogDescription>
                        {purchaseResponseMessage}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-[#ff5452] text-white">
                        확인
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                )}
              </AlertDialog>
            </div>
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
        className={`fixed bg-white bottom-[48px] w-full h-[${
          30 + itemOptions.length * 10
        }%] min-h-[30%] max-h-[50%] rounded-t-lg transform ${
          showOptions ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
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
              width={15}
              height={15}
              src="https://img.icons8.com/ios/100/back--v1.png"
              alt="옵션 접기"
              aria-label="옵션접기"
              style={{
                transform: "rotate(-90deg)",
                width: "auto",
                height: "auto",
              }}
            />
          )}
        </div>
        <div className="overflow-y-auto scrollbar-hide h-[50vh] bottom-[52px]">
          <div className="flex flex-col py-2 gap-3 text-sm">
            {optionExist &&
              Object.keys(optionExist).map((key, index) => {
                const optionKey = key as OptionName

                if (optionExist[optionKey]) {
                  return (
                    <div
                      key={optionKey}
                      onClick={() => getOptionDetailData(optionKey)}
                    >
                      <OptionSelector
                        disabled={
                          isTwoOrMoreTrueOption &&
                          index !== 0 &&
                          selectedOption[
                            Object.keys(optionExist)[index - 1] as OptionName
                          ].id === 0 &&
                          true
                        }
                        toggleOptionSelector={() =>
                          toggleOptionSelector(optionKey)
                        }
                        selectedOption={selectedOption[optionKey]}
                      />
                    </div>
                  )
                }
              })}
          </div>
          {isExistAnyOption ? (
            <SelectedItemOptionCard
              itemOptions={itemOptions}
              itemBasicInfo={itemBasicInfo}
              deleteItemOption={deleteItemOption}
              handleItemOptionCount={handleItemOptionCount}
            />
          ) : (
            itemBasicInfo &&
            itemOptions.length > 0 && (
              <SelectedItemCard
                itemBasicInfo={itemBasicInfo}
                itemNoneOptions={itemOptions}
                handleItemOptionCount={handleItemOptionCount}
              />
            )
          )}
        </div>
        {optionExist &&
          Object.keys(optionExist).map((key, index) => {
            const optionKey = key as OptionName
            if (optionExist[optionKey]) {
              return (
                <div key={`${optionKey}-${index}`}>
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
    </div>
  )
}
