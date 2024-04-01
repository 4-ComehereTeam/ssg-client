import PointTag from "./PointTag"

type MypointProps = {
  couponCnt: number
  ssgMoney: number
  ssgPoint: number
}

export default function MyPoint({
  couponCnt = 0,
  ssgMoney = 0,
  ssgPoint = 0,
}: MypointProps) {
  return (
    <section className="p-4 text-sm">
      <div className="flex text-center space-x-2  overflow-x-scroll scroll-smooth scrollbar-hide">
        <div className="border border-gray-300 rounded-lg p-3 w-full">
          <p className="mb-1">쿠폰</p>
          <p>
            <span className="text-base font-bold">{couponCnt}</span> 장
          </p>
          <div className="flex mt-3 space-x-1  justify-center items-center">
            <PointTag
              tagName="쿠폰함"
              width="w-14 h-5"
              backgroundColor="bg-[#000000]"
            />
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 w-full">
          <p className="mb-1">SSG MONEY</p>
          <p>
            <span className="text-base font-bold">{ssgMoney}</span> 원
          </p>
          <div className="flex mt-3 space-x-1  justify-center items-center">
            <PointTag
              tagName="상품권"
              width="w-14"
              backgroundColor="bg-[#FF5452]"
            />
            <PointTag
              tagName="계좌"
              width="w-11"
              backgroundColor="bg-[#000000]"
            />
            <PointTag
              tagName="포인트"
              width="w-14"
              backgroundColor="bg-[#4b5563]"
            />
          </div>
        </div>
        <div className=" border border-gray-300 rounded-lg p-3 w-full">
          <p className="mb-1 whitespace-nowrap">신세계포인트</p>
          <p>
            <span className="text-base font-bold">{ssgPoint}</span> p
          </p>
        </div>
      </div>
    </section>
  )
}
