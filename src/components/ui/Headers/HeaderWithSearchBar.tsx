"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeaderWithSearchBar() {
  const imageLoader = () => {
    return "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4"
  }

  const handleAlert = () => {
    alert("현재 개발 중입니다.")
  }

  return (
    <header className="flex flex-row justify-between items-center py-[8px] px-[14px] h-[56px] w-full">
      <div className="flex flex-shrink-0">
        <Link href="/home">
          <Image
            loader={imageLoader}
            alt="SSG.COM"
            src="logo.png"
            width={86}
            height={40}
          />
        </Link>
        <button
          aria-label="몰 목록 보기"
          className="rounded-full border h-4 my-auto m-[4px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              transform="translate(1 1)"
            >
              <path
                strokeWidth="1.5"
                d="M4.375 8.313L7 5.688 9.625 8.313"
                transform="translate(6.000000, 6.000000) scale(1, -1) translate(-7.000000, -7.000000)"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div
        className=" flex h-full w-full ml-[20px] mr-[10px] bg-[#F5F5F5] rounded-full relative"
        onClick={handleAlert}
      >
        <input
          readOnly
          className="appearance-none bg-transparent h-full w-full  rounded-full"
        />
        <div className="right-0 absolute w-[44px] h-10 font-[14px] items-center justify-center flex">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="w-6"
            name="SearchIcon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.60004 10.8C3.60004 14.76 6.84004 18 10.8 18C14.76 18 18 14.76 18 10.8C18 6.84001 14.76 3.60001 10.8 3.60001C6.84004 3.60001 3.60004 6.84001 3.60004 10.8ZM4.80007 10.8C4.80007 7.44001 7.44007 4.80001 10.8001 4.80001C14.1601 4.80001 16.8001 7.44001 16.8001 10.8C16.8001 14.16 14.1601 16.8 10.8001 16.8C7.44007 16.8 4.80007 14.16 4.80007 10.8Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.0187 15.8562L15.8672 15.0077L21.3826 20.5231L20.5341 21.3716L15.0187 15.8562Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="mx-2">
        <Link
          aria-label="고객센터 바로가기"
          href={"#"}
          className="flex-shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6"
            focusable="false"
            name="AlarmTalkIcon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.73193 11.4241C6.73193 10.1447 7.81656 9.06006 9.09593 9.06006H14.9519C16.2261 9.06681 17.3039 10.1487 17.3039 11.4241V12.1081C17.3039 13.3874 16.2193 14.4721 14.9399 14.4721H9.09593C7.81656 14.4721 6.73193 13.3874 6.73193 12.1081V11.4241ZM14.9399 10.2601H9.09593C8.4793 10.2601 7.93193 10.8074 7.93193 11.4241V12.1081C7.93193 12.7247 8.4793 13.2721 9.09593 13.2721H14.9399C15.5566 13.2721 16.1039 12.7247 16.1039 12.1081V11.4241C16.1039 10.8074 15.5566 10.2601 14.9399 10.2601Z"
              fill="currentColor"
            ></path>
            <path
              d="M10.4638 12.5159C10.8415 12.5159 11.1478 12.2097 11.1478 11.8319C11.1478 11.4542 10.8415 11.1479 10.4638 11.1479C10.086 11.1479 9.77979 11.4542 9.77979 11.8319C9.77979 12.2097 10.086 12.5159 10.4638 12.5159Z"
              fill="currentColor"
            ></path>
            <path
              d="M13.5839 12.5159C13.9617 12.5159 14.2679 12.2097 14.2679 11.8319C14.2679 11.4542 13.9617 11.1479 13.5839 11.1479C13.2061 11.1479 12.8999 11.4542 12.8999 11.8319C12.8999 12.2097 13.2061 12.5159 13.5839 12.5159Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4238 4.89602V3.90002H12.6238V4.89602H11.4238Z"
              fill="currentColor"
            ></path>
            <path
              d="M12.0238 3.62395C12.3598 3.62395 12.6238 3.35995 12.6238 3.02395C12.6238 2.68795 12.3598 2.42395 12.0238 2.42395C11.6878 2.42395 11.4238 2.68795 11.4238 3.02395C11.4238 3.35995 11.6878 3.62395 12.0238 3.62395Z"
              fill="currentColor"
            ></path>
            <path
              d="M11.9999 5.39995C15.3119 5.39995 17.9999 8.08795 17.9999 11.4V15.672L18.0599 15.852L18.9719 18.588H5.02786L5.93986 15.852L5.99986 15.672V11.4C5.99986 8.08795 8.68786 5.39995 11.9999 5.39995ZM11.9999 4.19995C8.03986 4.19995 4.79986 7.43995 4.79986 11.4V15.48L3.35986 19.8H20.6399L19.1999 15.48V11.4C19.1999 7.43995 15.9599 4.19995 11.9999 4.19995Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.92596 19.1343C10.3027 19.9264 10.9901 20.448 12.0241 20.448C13.0581 20.448 13.7455 19.9264 14.1223 19.1343L15.206 19.6497C14.6467 20.8255 13.5581 21.648 12.0241 21.648C10.4901 21.648 9.40153 20.8255 8.84229 19.6497L9.92596 19.1343Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="ml-1">
        <Link
          aria-label="장바구니 바로가기"
          href="/cart"
          className="flex-shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="w-6"
            name="CartIcon"
          >
            <rect
              x="6"
              y="8.40002"
              width="14.4"
              height="1.2"
              fill="currentColor"
            ></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
              fill="currentColor"
            ></path>
            <path
              d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}
