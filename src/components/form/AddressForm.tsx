"use client"

import { useState } from "react"
import DaumPostcodeEmbed from "react-daum-postcode"

type AddressFormPropsType = {
  isOpen: boolean
  handleAddress: (address: string) => void
  handleOpen: (isOpen: boolean) => void
}

export default function AddressForm({
  isOpen,
  handleAddress,
  handleOpen,
}: AddressFormPropsType) {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [zipCode, setZipcode] = useState<string>("")
  const [roadAddress, setRoadAddress] = useState<string>("")
  const [detailAddress, setDetailAddress] = useState<string>("")

  const completeHandler = (data: any) => {
    const newZipCode = data.zonecode
    const newRoadAddress = data.roadAddress
    setZipcode(newZipCode)
    setRoadAddress(newRoadAddress)
    setIsClick(true)
  }

  // 상세 주소검색 event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (zipCode.length < 1 || roadAddress.length < 1) {
      alert("주소를 선택해주세요.")
    } else if (detailAddress === "") {
      alert("상세주소를 입력해주세요.")
    } else {
      handleAddress(`${zipCode} ${roadAddress} ${detailAddress}`)
      handleOpen(false)
    }
  }

  const themeObj = {
    bgColor: "#FFFFFF", //바탕 배경색
    searchBgColor: "", //검색창 배경색
    contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "", //페이지 배경색
    textColor: "", //기본 글자색
    queryTextColor: "", //검색창 글자색
    postcodeTextColor: "#222222", //우편번호 글자색
    emphTextColor: "", //강조 글자색
    outlineColor: "", //테두리
  }

  const style = {
    borderBottom: "1px solid #222222",
    //TODO: 주소 클릭하면 주소 검색 창 닫고 해당 주소 보여주기
  }

  return (
    <div>
      {isOpen && (
        <div className="absolute top-0 right-0 w-full h-full z-[10000] bg-white">
          <DaumPostcodeEmbed
            theme={themeObj}
            style={style}
            onComplete={completeHandler}
            autoClose={false}
          />
          {isClick && (
            <div className="px-5 pt-5 flex flex-col gap-5 items-center">
              <input
                className="p-3 border w-full"
                type="text"
                onChange={changeHandler}
                value={detailAddress}
                placeholder="상세주소"
              />
              <button
                className="h-[40px] w-[40%] text-xs text-center text-white bg-[#222222] border border-slate-300 font-[550]"
                onClick={(e) => clickHandler(e)}
              >
                확인
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
