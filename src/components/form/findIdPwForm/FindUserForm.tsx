"use client"

import email from "@/asset/images/email.svg"
import Image from "next/image"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"
import { useFormState } from "react-dom"
import { findUserByEmail } from "@/actions/findIdPw"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FindUserForm({
  handlePayload,
}: {
  handlePayload: (
    isExistingMember: boolean,
    payload: { email: string; name: string },
  ) => void
}) {
  const [state, formAction] = useFormState(findUserByEmail, {
    error: "",
    isExistingMember: false,
  })
  const [payload, setPayload] = useState({
    email: "",
    name: "",
  })
  const router = useRouter()

  const onChangePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    })
  }

  const goModifyPwPage = () => {
    if (state?.isExistingMember) {
      handlePayload(state.isExistingMember, {
        email: payload.email,
        name: payload.name,
      })
      router.refresh()
    }
  }

  return (
    <form className="grid grid-row-5 gap-2 mx-3" action={formAction}>
      <p className="flex flex-col jutify-center items-center mb-8">
        <Image src={email} width={40} height={60} alt="이메일" />
        이메일
      </p>
      <input
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
        placeholder="이메일"
        name="email"
        type="email"
        onChange={onChangePayload}
      />
      <input
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
        placeholder="이름"
        name="name"
        type="text"
        onChange={onChangePayload}
      />

      <AlertDialog>
        <AlertDialogTrigger
          type="submit"
          className={`px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded`}
        >
          확인
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              {state?.error ? state.error : "비밀번호를 변경합니다."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-[#FF5B7E] text-white"
              onClick={goModifyPwPage}
            >
              확인
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  )
}
