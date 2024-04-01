import { OrderStatesProps } from "@/types/myssgType"
import Separator from "../ui/Separator"

const orderState: {
  id: number
  name: string
  prop: keyof OrderStatesProps["orderStateCnts"]
}[] = [
  { id: 1, name: "취소", prop: "cancel" },
  { id: 2, name: "교환", prop: "exchange" },
  { id: 3, name: "반품", prop: "return" },
  { id: 4, name: "구매확정", prop: "confirm" },
]

export default function OrderStates({ orderStateCnts }: OrderStatesProps) {
  return (
    <div className="h-10 flex justify-center items-center mt-2 border rounded-lg border-gray-100 bg-gray-100 text-[11px]">
      {orderState.map((state, index) => (
        <div
          key={state.id}
          className="flex flex-1 justify-between items-center ml-3 whitespace-nowrap"
        >
          <span>{state.name}</span>
          <span
            className={`${
              orderStateCnts[state.prop] > 0 ? "text-black" : "text-gray-200"
            } mr-2 text-[14px]`}
          >
            {orderStateCnts[state.prop]}
          </span>
          {index < orderState.length - 1 && <Separator className="w-[1px]" />}
        </div>
      ))}
    </div>
  )
}
