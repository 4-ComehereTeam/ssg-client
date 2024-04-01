import Manage from "@/components/myssg/Manage"
import FreqMenu from "@/components/myssg/FreqMenu"
import MyPageBanner from "@/components/myssg/MyPageBanner"
import MyPoint from "@/components/myssg/MyPoint"
import MyOrder from "@/components/myssg/MyOrder"
import Profile from "@/components/myssg/Profile"

const orderStepCnts = {
  orderAccepted: 1,
  paymentCompleted: 0,
  preparing: 0,
  shipping: 0,
  complete: 1,
}

const orderStateCnts = {
  cancel: 1,
  exchange: 0,
  return: 0,
  confirm: 1,
}

export default function Myssg() {
  return (
    <main className="scrollbar-hide">
      <Profile />
      <MyPoint couponCnt={0} ssgMoney={0} ssgPoint={0} />
      <MyPageBanner />
      <MyOrder orderStepCnts={orderStepCnts} orderStateCnts={orderStateCnts} />
      <FreqMenu />
      <div className=" bg-gray-100 h-2 mb-2 mt-4"></div>
      <Manage />
    </main>
  )
}
