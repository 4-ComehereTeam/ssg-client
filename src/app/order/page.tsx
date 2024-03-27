"use client"

import Header2 from "@/components/Header2";
import DeliveryAddress from "@/components/order/DeliveryAddress";
import DeliveryRequest from "@/components/order/DeliveryRequest";
import TypeOfPayment from "@/components/order/TypeOfPayment";
import ExpectedPaymoney from "@/components/order/ExpectedPaymoney";
import TermsOfService from "@/components/order/TermsOfService";
import InformationOfOrderer from "@/components/order/InformationOfOrderer";
import DeliveryItemList from "@/components/order/DeliveryItemList";
import ButtonOfOrder from "@/components/ui/ButtonOfOrder";

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
                <ButtonOfOrder amount={10000}/>
            </div>
        </>
    )
}
