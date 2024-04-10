"use client"

import { useFormState } from "react-dom"
import { findPwModify } from "@/actions/findIdPw"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"
import { useState } from "react"
import { useRouter } from "next/navigation"
import FindUserForm from "./FindUserForm"

export default function FindPwForm({
  payload,
}: {
  payload: { email: string; name: string }
}) {
  const [state, formAction] = useFormState(findPwModify, {
    error: "",
  })
  const [userInput, setUserInput] = useState({
    email: payload.email,
    name: payload.name,
  })
  const [passwords, setPsswards] = useState({
    newPassword: "",
    confirmPassword: "",
  })
  const [isExistingMember, setIsExistingMember] = useState(false)
  const router = useRouter()

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPsswards({
      ...passwords,
      [e.target.name]: e.target.value,
    })
  }

  const handlePayload = (
    isExistingMember: boolean,
    payload: { email: string; name: string },
  ) => {
    setUserInput(payload)
    setIsExistingMember(isExistingMember)
  }

  const handleRouter = () => {
    if (!state?.error) {
      router.push("/member/signin")
    }
  }

  if ((payload.email && payload.name) || isExistingMember) {
    return (
      <form className="grid grid-row-5 gap-2 mx-3" action={formAction}>
        <h3 className="font-bold text-xs">비밀번호 변경</h3>
        <input hidden readOnly name="email" value={payload.email} />
        <input hidden readOnly name="name" value={payload.name} />
        <input
          className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
          placeholder="영문, 숫자 조합 8~20자리"
          name="newPassword"
          type="password"
          value={passwords.newPassword}
          onChange={handlePasswordConfirm}
        />
        <input
          className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
          placeholder="비밀번호 확인"
          name="confirmPassword"
          type="password"
          value={passwords.confirmPassword}
          onChange={handlePasswordConfirm}
        />
        {passwords.newPassword.length > 0 &&
          passwords.confirmPassword.length > 0 &&
          passwords.newPassword !== passwords.confirmPassword && (
            <p className="text-[#FF5452]">비밀번호가 일치하지 않습니다.</p>
          )}
        {passwords.newPassword.length > 0 &&
          passwords.confirmPassword.length > 0 &&
          passwords.newPassword === passwords.confirmPassword && (
            <p className="text-[#4fdd43]">비밀번호가 일치합니다.</p>
          )}
        <AlertDialog>
          <AlertDialogTrigger
            type="submit"
            className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded"
          >
            확인
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogDescription>
                {state?.error ? state.error : "비밀번호가 변경되었습니다."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="bg-[#FF5B7E] text-white"
                onClick={() => handleRouter()}
              >
                확인
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    )
  }
  return <FindUserForm handlePayload={handlePayload} />
}
