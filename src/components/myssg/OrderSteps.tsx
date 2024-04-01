import { OrderStepsProps } from "@/types/myssgType"
import Image from "next/image"

const orderSteps: {
  id: number
  name: string
  prop: keyof OrderStepsProps["orderStepCnts"]
}[] = [
  { id: 1, name: "주문접수", prop: "orderAccepted" },
  { id: 2, name: "결제완료", prop: "paymentCompleted" },
  { id: 3, name: "상품준비중", prop: "preparing" },
  { id: 4, name: "배송중", prop: "shipping" },
  { id: 5, name: "배송완료", prop: "complete" },
]

export default function OrderSteps({ orderStepCnts }: OrderStepsProps) {
  return (
    <div className="mt-3">
      <ul className="flex flex-wrap justify-center">
        {orderSteps.map((step, index) => (
          <li key={step.id} className="mb-3">
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-2xl sm:w-20 sm:h-20 sm:rounded-3xl">
                  <span
                    className={
                      orderStepCnts[step.prop] === 0
                        ? "text-gray-300"
                        : "text-black"
                    }
                  >
                    {orderStepCnts[step.prop]}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-600">
                  {step.name}
                </span>
              </div>
              {index < orderSteps.length - 1 && (
                <div className="mx-1 h-6">
                  <Image
                    width="8"
                    height="8"
                    src="https://img.icons8.com/small/16/000000/back.png"
                    alt="주문/배송 조회"
                    style={{
                      transform: "rotate(180deg)",
                    }}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
