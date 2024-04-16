import Image from "next/image"
import Link from "next/link"
import OrderSteps from "./OrderSteps"
import { OrderProps } from "@/types/myssgType"
import OrderStates from "./OrderStates"

export default function MyOrder({ orderStepCnts, orderStateCnts }: OrderProps) {
  return (
    <section>
      <div
        className="mt-10 border-t-2 rounded-t-3xl"
        style={{ boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="p-4 mt-10">
          <div className="flex justify-between ">
            <Link href={"/not-found"}>
              <h1 className="flex gap-1 items-center">
                <span className="font-extrabold text-base">주문/배송 조회</span>
                <Image
                  width="10"
                  height="10"
                  src="https://img.icons8.com/small/16/000000/back.png"
                  alt="주문/배송 조회"
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </h1>
            </Link>
            <Link
              href="/not-found"
              className="flex items-center justify-center border rounded-md px-3 text-xs whitespace-nowrap"
            >
              <Image
                width={20}
                height={20}
                src="https://img.icons8.com/fluency-systems-regular/48/marker--v1.png"
                alt="배송지관리"
              />
              <span>배송지 관리</span>
            </Link>
          </div>
          <OrderSteps orderStepCnts={orderStepCnts} />
          <OrderStates orderStateCnts={orderStateCnts} />
        </div>
      </div>

      <Link href={"/not-found"}>
        <p className="flex justify-center items-center mt-4  text-xs">
          주문/배송 조회 보러가기
          <Image
            width="20"
            height="8"
            src="https://img.icons8.com/material-rounded/24/back--v1.png"
            alt="주문/배송 조회"
            style={{ transform: "rotate(180deg)" }}
          />
        </p>
      </Link>
    </section>
  )
}
