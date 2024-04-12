"use client"
// import HeaderTitle from '@/components/ui/HeaderTitle'
import React, { useState } from "react"
import DaumPostcodeEmbed from "react-daum-postcode"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../shadcnUI/alert-dialog"
import { AddressType } from "../form/signupForm/SignupForm"
interface AddaddressProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
  handleAddress: (newAddress: AddressType) => void
}
export default function Postcode({
  modalOpen,
  setModalOpen,
  handleAddress,
}: AddaddressProps) {
  const [fullAddr, setFullAddr] = useState("")
  const [detailAddr, setDetailAddr] = useState("")
  const [zCode, setzCode] = useState("")

  const settingDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddr(e.target.value)
  }
  let zonecode = ""
  let full = ""
  let extraAddress = ""

  const handleComplete = (data: any) => {
    zonecode = data.zonecode
    full = data.address
    extraAddress = ""

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      full += extraAddress !== "" ? ` (${extraAddress})` : ""
    }
    setFullAddr(full)
    setzCode(zonecode)
    handleAddress({ fullAddress: full, zipCode: zonecode, detailAddress: "" })
  }
  const closeModal = () => {
    if (fullAddr.length > 0 && detailAddr.length > 0) {
      setDetailAddr(detailAddr)
      handleAddress({
        fullAddress: fullAddr,
        zipCode: zCode,
        detailAddress: detailAddr,
      })
      setModalOpen(false)
    }
  }

  return (
    modalOpen && (
      <div
        className="bg-white top-0 left-0 right-0 bottom-0 overflow-y-auto"
        style={{ zIndex: "20", position: "fixed" }}
      >
        {/* <HeaderTitle title="배송지 추가" /> */}
        <div className="">
          <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false} />
        </div>
        <div className="px-5 my-5 w-full">
          <ul className="flex flex-col gap-2  h-18 justify-between">
            {zCode.length > 0 && (
              <li className="flex flex-row items-center gap-2">
                <span className="flex-none px-2 py-1 w-[70px] bg-[#F6F6F6] text-center text-[#928888] text-nowrap">
                  우편번호
                </span>
                <span className="left-32">{zCode}</span>
              </li>
            )}
            {fullAddr.length > 0 && (
              <li className="flex flex-row gap-2 items-center">
                <span className="flex-none px-2 py-1 w-[70px] bg-[#F6F6F6] text-center text-[#928888] text-nowrap">
                  주소
                </span>
                <span>{fullAddr}</span>
              </li>
            )}
            {fullAddr.length > 0 && detailAddr.length > 0 && (
              <li className="flex flex-row gap-2 items-center">
                <span className="flex-none px-2 py-1 w-[70px] bg-[#F6F6F6] text-center text-[#928888] text-nowrap">
                  상세 주소
                </span>
                <span>{detailAddr}</span>
              </li>
            )}
          </ul>
        </div>
        <div className="px-5 pt-7 w-full">
          <input
            type="text"
            className=" w-full h-10 pl-2"
            style={{ border: "1px solid " }}
            onChange={settingDetailAddress}
            placeholder="상세주소를 입력해주세요."
          />
          <div className="flex justify-center">
            <AlertDialog>
              <AlertDialogTrigger
                className="h-[40px] w-full mt-1 text-xs text-center text-white bg-[#222222] border border-slate-300 font-[550]"
                onClick={() => closeModal()}
              >
                확인
              </AlertDialogTrigger>
              {detailAddr.length < 1 && (
                <AlertDialogContent>
                  <AlertDialogHeader>
                    {zCode.length < 1 || fullAddr.length < 1
                      ? "주소를 선택해주세요."
                      : detailAddr.length === 0 && "상세주소를 입력해주세요."}
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="w-full h-10 mt-3 font-bold bg-[#FF5452] text-white">
                      닫기
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
            </AlertDialog>
            {/* <button
              className="w-full h-10 mt-3 font-bold bg-[#FF5452] text-white"
              onClick={() => {
                closeModal()
              }}
            >
              확인
            </button> */}
          </div>
        </div>
      </div>
    )
  )
}
