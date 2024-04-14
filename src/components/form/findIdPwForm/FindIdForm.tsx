"use client"

import { useFormState } from "react-dom"
import { findId } from "@/actions/findIdPw"
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
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FindIdForm({
  goModifyPwPage,
}: {
  goModifyPwPage: (payload: { email: string; name: string }) => void
}) {
  const [state, formAction] = useFormState(findId, {
    error: "",
    signinId: "",
  })
  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
  })
  const router = useRouter()

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    })
  }

  const goSigninPage = () => {
    router.push("/member/signin")
  }

  if (state.signinId) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center py-4 gap-3 border border-solid w-[95%] max-w-[500px] rounded-sm">
          <p className="text-xs">고객님께서 가입하신 아이디입니다.</p>
          <div className="flex flex-row gap-2">
            <span>아이디</span>
            <span className="font-bold">{state.signinId}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 w-[95%] max-w-[500px] justify-center">
          <button
            type="submit"
            onClick={() =>
              goModifyPwPage({ email: userInput.email, name: userInput.name })
            }
            className="bg-[#808080] text-white text-[15px] font-bold px-5 py-4 rounded-sm"
          >
            비밀번호 재설정
          </button>
          <button
            onClick={goSigninPage}
            className="bg-[#FF5B7E] text-white text-[15px] font-bold px-5 py-4 rounded-sm"
          >
            로그인
          </button>
        </div>
      </div>
    )
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
        onChange={handleUserInput}
      />
      <input
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
        placeholder="이름"
        name="name"
        type="text"
        onChange={handleUserInput}
      />

      <AlertDialog>
        <AlertDialogTrigger
          className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded"
          type="submit"
        >
          확인
        </AlertDialogTrigger>
        {state.error && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogDescription>
                <span>{state?.error}</span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-[#FF5B7E] text-white">
                확인
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </form>
  )
}
