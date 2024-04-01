"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HeaderOfMyssg() {
  const router = useRouter()
  const back = () => {
    router.back()
  }
  return (
    <header className="w-full flex items-center border-b h-11 border-gray-200">
      <span className="ml-2 w-6 h-6" onClick={back}>
        <svg viewBox="0 0 24 24" focusable="false" name="ArrowLeftIcon">
          <path
            d="M21.5999 11.4H4.43991L11.2799 4.67997L10.3199 3.71997L2.15991 12L10.3199 20.28L11.2799 19.32L4.43991 12.6H21.5999V11.4Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <p className="flex-grow  text-base text-center font-bold">MY SSG</p>
      <Link href={"/cart"} className="w-6 h-6 mr-2">
        <svg viewBox="0 0 24 24" focusable="false" name="CartIcon">
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
    </header>
  )
}
