"use client"

import { Options, OptionSepcific } from "@/actions/itemOption"
import Image from "next/image"
import { OptionName } from "../ItemBottomBar"

type OptionDrawerProps = {
  optionName: OptionName
  optionDetail: Options | null
  defaultOption: OptionSepcific
  showOptionDrawer: boolean
  handleOptionDetail: (
    optionName: OptionName,
    optionObject: OptionSepcific,
  ) => void
  selectedOption: OptionSepcific
  isLast: boolean
}

export default function OptionDrawer({
  optionName,
  optionDetail,
  defaultOption,
  showOptionDrawer,
  handleOptionDetail,
  selectedOption,
  isLast,
}: OptionDrawerProps) {
  return (
    <div
      id="drawer"
      className={`fixed z-40 bg-white bottom-[-5px] w-full h-[130%] rounded-t-lg transform ${
        showOptionDrawer ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-in-out overflow-y-auto`}
    >
      <div className="w-full">
        <div
          className="w-full h-[29px] rounded-t-lg flex justify-center"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => handleOptionDetail(optionName, selectedOption)}
        >
          {showOptionDrawer && (
            <Image
              width={15}
              height={15}
              src="https://img.icons8.com/ios/100/back--v1.png"
              alt="상세 옵션 접기"
              style={{
                transform: "rotate(-90deg)",
                width: "auto",
                height: "auto",
              }}
            />
          )}
        </div>
        <div>
          <div className="px-4">
            <div
              onClick={() => handleOptionDetail(optionName, defaultOption)}
              className="border border-solid rounded-sm h-[40px] w-full flex items-center justify-between px-2 cursor-pointer text-sm"
            >
              {defaultOption.value}
              <Image
                width={15}
                height={15}
                src="https://img.icons8.com/ios/100/back--v1.png"
                alt="상세 옵션 접기"
                style={{
                  transform: "rotate(90deg)",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <div className="w-full h-full mt-2 flex flex-col gap-3 items-start">
              {optionDetail?.options.map((option) => (
                <button
                  key={option.optionId}
                  className={`p-2 w-full flex flex-row gap-2 justify-start items-center rounded-sm ${
                    selectedOption.value === option.value
                      ? "border border-black"
                      : "hover:bg-gray-100"
                  } cursor-pointer`}
                  onClick={() =>
                    handleOptionDetail(optionName, {
                      value: option.value,
                      id: option.id,
                      optionId: option.optionId,
                      stock: option.stock,
                    })
                  }
                >
                  <span className="text-sm">{option.value}</span>
                  <span className="text-xs">
                    {option.stock === 0
                      ? " (품절)"
                      : isLast && ` (남은 수량: ${option.stock}개)`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
