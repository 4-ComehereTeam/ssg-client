"use client"

import { useFormState } from "react-dom"
import { findPw } from "@/actions/findIdPw"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"

export default function FindPwForm({
  payload,
}: {
  payload: { email: string; name: string }
}) {
  const [state, formAction] = useFormState(findPw, {
    error: "",
  })
  return (
    <form className="grid grid-row-5 gap-2 mx-3" action={formAction}>
      <h3 className="font-bold text-xs">비밀번호 변경</h3>
      <input hidden readOnly name="email" value={payload.email} />
      <input hidden readOnly name="name" value={payload.name} />
      <input
        placeholder="영문, 숫자 조합 8~20자리"
        name="newPassword"
        type="password"
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <input
        placeholder="비밀번호 확인"
        name="confirmPassword"
        type="password"
        className="h-8 text-sm pl-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <AlertDialog>
        <AlertDialogTrigger
          type="submit"
          className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded"
        >
          확인
        </AlertDialogTrigger>
        {state?.error && (
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
