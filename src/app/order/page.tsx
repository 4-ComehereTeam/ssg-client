"use client"

import HeaderToBack from "@/components/ui/Headers/HeaderToBack";
import DeliveryAddress from "@/components/order/DeliveryAddress";
import DeliveryRequest from "@/components/order/DeliveryRequest";
import TypeOfPayment from "@/components/order/TypeOfPayment";
import ExpectedPaymoney from "@/components/order/ExpectedPaymoney";
import TermsOfService from "@/components/order/TermsOfService";
import InformationOfOrderer from "@/components/order/InformationOfOrderer";
import DeliveryItemList from "@/components/order/DeliveryItemList";
import ButtonOfOrder from "@/components/ui/Buttons/ButtonOfOrder";

export default function OrderPage(){


    return(
        <>
            <HeaderToBack title="결제하기" />
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
