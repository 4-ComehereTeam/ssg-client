"use client"

import { Options } from "@/actions/itemOption"
import Image from "next/image"

type OptionDrawerProps = {
  optionName: "color" | "size" | "etc"
  optionDetail: Options | null
  defaultOption: string
  showOptionDrawer: boolean
  handleOptionDetail: (
    optionName: "color" | "size" | "etc",
    optionObject: { value: string; id: number; optionId: number },
  ) => void

  selectedOption: { value: string; id: number }
}

export default function OptionDrawer({
  optionName,
  optionDetail,
  defaultOption,
  showOptionDrawer,
  handleOptionDetail,
  selectedOption,
}: OptionDrawerProps) {
  return (
    <div
      id="drawer"
      className={`fixed z-30 bg-white bottom-[-5px] w-full h-[80%] rounded-t-lg transform ${
        showOptionDrawer ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="w-full">
        <div
          className="w-full h-[29px] rounded-t-lg flex justify-center"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => handleOptionDetail}
        >
          {showOptionDrawer && (
            <Image
              width="0"
              height="0"
              src="https://img.icons8.com/ios/100/back--v1.png"
              alt="상세 옵션 접기"
              style={{
                transform: "rotate(-90deg)",
                width: "20px",
                height: "20px",
              }}
            />
          )}
        </div>
        <div>
          <div className="px-4">
            <p className="border border-solid rounded-sm h-[40px] w-full flex items-center justify-between px-2 cursor-pointer text-sm">
              {defaultOption}
              <Image
                width="0"
                height="0"
                src="https://img.icons8.com/ios/100/back--v1.png"
                alt="상세 옵션 접기"
                style={{
                  transform: "rotate(90deg)",
                  width: "16px",
                  height: "16px",
                }}
              />
            </p>
            <div className="w-full">
              <div className="border border-solid rounded-sm text-sm">
                {optionDetail?.options.map((option) => (
                  <div
                    key={option.optionId}
                    className={`p-2 ${
                      selectedOption.value === option.value
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    } cursor-pointer`}
                    onClick={() =>
                      handleOptionDetail(optionName, {
                        value: option.value,
                        id: option.id,
                        optionId: option.optionId,
                      })
                    }
                  >
                    {option.value}
                    {option.stock === 0
                      ? " (품절)"
                      : ` (남은 수량: ${option.stock}개)`}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
