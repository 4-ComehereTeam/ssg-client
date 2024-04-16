"use client"

import { OptionExist } from "@/actions/itemOption"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../shadcnUI/alert-dialog"
import { cartAdd } from "@/actions/cart/cartAdd"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { SIGNIN_WITH_CALLBACK } from "@/routes"

export default function ItemCart({
  itemId,
  optionExist,
}: {
  itemId: number
  optionExist: OptionExist | null
}) {
  const { status } = useSession()
  const anyOptionExist =
    optionExist?.hasColor || optionExist?.hasSize || optionExist?.hasEtc

  const handleCart = async () => {
    if ((!optionExist || !anyOptionExist) && status === "authenticated") {
      await cartAdd(itemId, null, 1)
    }
  }

  let message = ""
  if (status === "authenticated") {
    if (!optionExist || !anyOptionExist) {
      message += "장바구니에 상품이 담겼습니다."
    } else {
      message += "옵션이 있는 상품입니다. 상품상세에서 옵션을 선택해주세요."
    }
  } else {
    message += "로그인 후 이용해주세요."
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="w-[28px] h-[28px]"
        onClick={() => handleCart()}
      >
        <svg width="20px" viewBox="0 0 24 24" focusable="false" name="CartIcon">
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
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#FF5452] text-white">
            {status === "authenticated" ? (
              "확인"
            ) : (
              <Link href={SIGNIN_WITH_CALLBACK} className="w-full h-full">
                로그인하기
              </Link>
            )}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
