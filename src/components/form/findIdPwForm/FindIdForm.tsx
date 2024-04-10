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

export default function FindIdForm() {
  const [state, formAction] = useFormState(findId, {
    error: "",
    signinId: "",
  })
  const router = useRouter()

  const handleRouter = () => {
    router.push("/member/signin")
  }

  if (state.signinId) {
    const signinId =
      state.signinId.substring(0, 3) + "*".repeat(state.signinId.length - 3)
    return (
      <div>
        <span>아이디</span>
        <span>{signinId}</span>
        <button onClick={handleRouter}>로그인하기</button>
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
        placeholder="이메일"
        name="email"
        type="email"
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <input
        placeholder="이름"
        name="name"
        type="text"
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />

      <AlertDialog>
        <AlertDialogTrigger
          type="submit"
          className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded"
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
              <AlertDialogCancel className="bg-[#FF5452] text-white">
                확인
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </form>
  )
}
