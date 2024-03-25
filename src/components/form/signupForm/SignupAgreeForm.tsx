"use client"

import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"
import { signupAgreements } from "@/data/agreements"

export default function SignupAgreeForm({}) {
  const router = useRouter()
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: signupAgreements.length }, () => false),
  )

  const handleCheckboxChange = (position: number, id: string) => {
    const agreeAllIndex = signupAgreements.findIndex(
      (agreement) => agreement.id === "allAgreeSignup",
    )

    const isAgreeAllPresent = agreeAllIndex !== -1
    if (id === "allAgreeSignup") {
      const areAllChecked = checkedState.every(Boolean)
      setCheckedState(checkedState.map(() => !areAllChecked))
    } else {
      let updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item,
      )

      if (isAgreeAllPresent) {
        const isRestChecked =
          updatedCheckedState.slice(0, agreeAllIndex).every(Boolean) &&
          updatedCheckedState.slice(agreeAllIndex + 1).every(Boolean)
        updatedCheckedState[agreeAllIndex] = isRestChecked
      }

      setCheckedState(updatedCheckedState)
    }
  }

  const anyUnchecked = checkedState.some((state) => state === false)

  const handleRoute = () => {
    if (!anyUnchecked) router.push("/member/signup/form")
  }

  return (
    <section className="flex flex-col px-5 mb-7 text-xs leading-4">
      <div className="py-5">
        {signupAgreements.map((agreement) => (
          <div key={agreement.num} className="font-bold">
            {agreement.num == 0 && (
              <Checkbox
                id={agreement.id}
                text={agreement.text}
                onChange={() =>
                  handleCheckboxChange(agreement.num, agreement.id)
                }
                checked={checkedState[agreement.num]}
                isDisabled={false}
                checkboxShape="square"
              />
            )}
            {agreement.num == 1 && (
              <h5 className="py-4 mt-4 border-t border-[#cccccc] pl-3">
                신세계포인트
              </h5>
            )}
            {agreement.num == 5 && (
              <h5 className="py-4 mt-4 border-t border-[#cccccc] pl-3">
                SSG.COM
              </h5>
            )}
            {agreement.num > 0 && (
              <div className="flex gap-4 justify-between py-1.5 pl-3 w-full text-zinc-600 text-[0.7rem] font-normal">
                <Checkbox
                  id={agreement.id}
                  text={agreement.text}
                  onChange={() =>
                    handleCheckboxChange(agreement.num, agreement.id)
                  }
                  checked={checkedState[agreement.num]}
                  isDisabled={false}
                  checkboxShape="square"
                />
                <button className="w-[68px] h-[22px] text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]">
                  내용보기
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="w-full h-[48px] bg-[#FF5452] text-white text-lg font-semibold"
            onClick={() => handleRoute()}
          >
            다음
          </button>
        </AlertDialogTrigger>
        {anyUnchecked && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogDescription>
                약관에 동의해주세요.
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
    </section>
  )
}
