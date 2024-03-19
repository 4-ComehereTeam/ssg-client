import { CheckboxesPropsType } from "@/types/checkboxesPropsType"
import React from "react"
import Checkbox from "../ui/Checkbox"

type MarketingAgreeFormPropsType = {
  marketingInfoReceiveMethods: CheckboxesPropsType
  agreementsCheckedState: boolean[]
  notice: string
}

function MarketingAgreeForm({
  marketingInfoReceiveMethods,
  agreementsCheckedState,
  notice,
}: MarketingAgreeFormPropsType) {
  return (
    <div>
      <ul className="flex flex-row gap-3 mt-3.5 mb-2.5 pt-3.5 pl-4 border-t disabled:">
        {marketingInfoReceiveMethods.map((method) => (
          <li key={method.num}>
            <Checkbox
              id={method.id}
              text={method.text}
              isDisabled={
                !agreementsCheckedState.some((state) => state === true)
              }
              checkboxShape="square"
            />
          </li>
        ))}
      </ul>
      <p className="ml-6 mt-3 text-[#FF5452] text-xs">{notice}</p>
    </div>
  )
}

export default MarketingAgreeForm
