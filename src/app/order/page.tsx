"use client"

import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";
import DeliveryAddress from "@/components/order/DeliveryAddress";
import DeliveryRequest from "@/components/order/DeliveryRequest";
import TypeOfPayment from "@/components/order/TypeOfPayment";
import ExpectedPaymoney from "@/components/order/ExpectedPaymoney";
import TermsOfService from "@/components/order/TermsOfService";
import InformationOfOrderer from "@/components/order/InformationOfOrderer";
import DeliveryItemList from "@/components/order/DeliveryItemList";

export default function OrderPage(){


    return(
        <>
            <Header2 />
            <div className="bg-[#f5f5f5]">
                <DeliveryAddress />
                <DeliveryRequest />
                <TypeOfPayment />
                <ExpectedPaymoney />
                <TermsOfService />
                <InformationOfOrderer />
                <DeliveryItemList />
                <Link href={"/order/complete"}>
                    <div className="bg-[#ff5452] p-4 sticky right-0 left-0 bottom-0 z-10 text-center">
                        <span className="text-white font-normal">
                            <span className="font-bold">{"10,000"}원</span> 결제하기
                        </span>
                    </div>
                </Link>
                
            </div>

        </>
    )
}
