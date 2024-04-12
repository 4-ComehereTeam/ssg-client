import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import DeliveryAddress from "@/components/order/DeliveryAddress"
import DeliveryRequest from "@/components/order/DeliveryRequest"
import TypeOfPayment from "@/components/order/TypeOfPayment"
import ExpectedPaymoney from "@/components/order/ExpectedPaymoney"
import TermsOfService from "@/components/order/TermsOfService"
import InformationOfOrderer from "@/components/order/InformationOfOrderer"
import DeliveryItemList from "@/components/order/DeliveryItemList"
import ButtonOfOrder from "@/components/ui/Buttons/ButtonOfOrder"
import { Suspense } from "react"

<<<<<<< HEAD
export default function OrderPage(){

    return(
        <>
            <HeaderToBack title="결제하기" />
            <div className="bg-[#f5f5f5] py-3">
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
=======
export default function OrderPage() {
  return (
    <>
      <HeaderToBack title="결제하기" />
      <div className="bg-[#f5f5f5] py-3">
        <DeliveryAddress />
        <DeliveryRequest />
        <TypeOfPayment />
        <ExpectedPaymoney />
        <TermsOfService />
        <InformationOfOrderer />
        <Suspense>
          <DeliveryItemList />
        </Suspense>
        <ButtonOfOrder amount={10000} />
      </div>
    </>
  )
>>>>>>> ea820c8be8ba93e82dd277104e54dbf509523294
}
