import { useState } from "react"
import Checkbox from "../../ui/Checkbox"
import {
  AgreementsType,
  AgreementType,
  MktReceiveMethodsType,
} from "@/types/agreementType"

type MarketingAgreeFormPropsType = {
  agreements: AgreementsType
  receiveMethods: AgreementsType
  notice: string
  onChangeAgrees: (
    type: keyof MktReceiveMethodsType,
    isChecked: boolean,
  ) => void
}

export default function MarketingAgreeForm({
  agreements,
  receiveMethods,
  notice,
  onChangeAgrees,
}: MarketingAgreeFormPropsType) {
  const [agrees, setAgrees] = useState(
    Array.from({ length: agreements.length }, () => false),
  )

  const [methodChecks, setMethodCheck] = useState(
    Array.from({ length: receiveMethods.length }, () => false),
  )

  const [isDisabled, setDisabled] = useState(true)

  const handleAgree = (agreement: AgreementType) => {
    const updatedAgrees = agrees.map((agree, index) =>
      index === agreement.num ? !agree : agree,
    )

    const allUnChecked = updatedAgrees.every((agree) => agree === false)

    if (allUnChecked) {
      const updatedMethods = methodChecks.map(() => false)
      setMethodCheck(updatedMethods)
    }

    setDisabled(allUnChecked)
    setAgrees(updatedAgrees)
    onChangeAgrees(agreement.id, updatedAgrees[agreement.num])
  }

  const handleMethodCheck = (method: AgreementType) => {
    const updatedChecks = methodChecks.map((check, index) =>
      index === method.num ? !check : check,
    )

    setMethodCheck(updatedChecks)
    onChangeAgrees(method.id, updatedChecks[method.num])
  }

  return (
    <ul>
      {agreements.map((agreement) => (
        <li
          key={agreement.num}
          className="flex flex-row justify-between py-1.5 pl-3 w-full text-zinc-600 text-xs font-normal"
        >
          <Checkbox
            id={agreement.id}
            text={agreement.text}
            onChange={() => handleAgree(agreement)}
            checked={agrees[agreement.num]}
            isDisabled={false}
            checkboxShape="square"
          />
          <button className="w-[68px] h-[22px] text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]">
            내용보기
          </button>
        </li>
      ))}
      <ul className="flex flex-row gap-3 mt-3.5 mb-2.5 pt-3.5 pl-4 border-t">
        {receiveMethods.map((method) => (
          <li key={method.num}>
            <Checkbox
              id={method.id}
              text={method.text}
              onChange={() => handleMethodCheck(method)}
              checked={methodChecks[method.num]}
              isDisabled={isDisabled}
              checkboxShape="square"
            />
          </li>
        ))}
      </ul>
      <p className="ml-6 mt-3 text-[#FF5452] text-xs">{notice}</p>
    </ul>
  )
}
