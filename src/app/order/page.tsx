import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import backArrow from "@/asset/images/backArrow.svg"

export default function OrderPage(){

    return(
        <>
            <div className="flex justify-between pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300">
                <Link href="#" className="w-[50px] flex item-center justify-center">
                    <Image loading="lazy" src={backArrow} alt="뒤로가기" />
                </Link>
                <div className="flex-auto my-auto">결제하기</div>
            </div>
                
            <div className="bg-[#f5f5f5]">

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">
                            배송지 : {"홍길동"}
                        </h2>
                        <button className="border-[1px] border-[#d8d8d8] px-2 text-xs">변경</button>
                    </div>
                    <div className="my-4 text-sm">
                        {"[55555] 부산광역시 해운대구 센텀 리더스마크 4층"}
                    </div>
                    <div className="flex justify-between text-[#888888]">
                        <span className="text-xs">
                            {"홍길동"} / {"010-0000-0000"}
                        </span>
                        <div className="flex justify-center items-center">
                            <input type="checkbox" className="w-8 h-4 rounded-sm"/>
                            <span className="text-xs" >
                                안심번호사용
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold ">
                            배송 요청사항
                        </h2>
                        <button className="border-[1px] px-2 text-xs border-[#d8d8d8]">변경</button>
                    </div>
                    <div>
                        <span className="text-xs text-[#888888] w-32">
                            택배배송 요청사항
                        </span>
                        <span className="text-sm">
                            {"없음"}
                        </span>
                    </div>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="border-b-[0.2px]">
                        <span className="text-lg font-semibold my-5 mx-4">
                            결제방법
                        </span>
                    </div>
                    <div className="my-4 ml-2">
                        <input type="radio" /> 일반결제
                    </div>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>
                            결제예정금액
                        </span>
                        <span>
                            {"10,000"}원
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>주문금액</span>
                        <span>{"30,000"}원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송비</span>
                        <span>+ {"3,000"}원</span>
                    </div>
                    <div className="flex justify-between">
                        <span>할인금액</span>
                        <span className="text-[red]">- {"23,000"}원</span>
                    </div>
                    <div className="flex justify-between text-[#888888]">
                        <span className="">└ 상품할인</span>
                        <span>- {"23,000"}원</span>
                    </div>
                </div>

                <div className="bg-white m-4 rounded-xl text-center">
                    <div className="flex justify-between p-4">
                        <span>
                            주문정보 및 서비스 약관에 동의합니다.
                        </span>
                        <button>
                            ▼
                        </button>
                    </div>
                    <button className="bg-[#ff5452] w-full rounded-b-xl text-white h-[50px] font-bold">결제하기</button>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold">
                            주문자 정보
                        </span>
                        <button className="border-[1px] px-2 text-xs border-[#d8d8d8]">
                            변경
                        </button>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="flex justify-between">
                            <span>주문자명</span>
                            <span>{"홍길동"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>연락처</span>
                            <span>{"010-0000-0000"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>이메일</span>
                            <span>{"gildong@naver.com"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>품절시 환불</span>
                            <span>{"주문 시 결제수단으로 환불받기"}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold">택배배송</span>
                    </div>
                    <div className="flex">
                        <div className="flex justify-between">
                            <Image src="https://sitem.ssgcdn.com/74/87/78/item/1000531788774_i1_140.jpg" alt="한우" width={100} height={100}/>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span>{"010-0000-0000"}</span>
                            <span>이메일</span>
                            <span>{"gildong@naver.com"}</span>
                            <span>품절시 환불</span>
                            <span>{"주문 시 결제수단으로 환불받기"}</span>
                        </div>
                    </div>

                </div>

                <div className="bg-[#ff5452] p-4 sticky bottom-0 text-center">
                    <span className="text-white font-normal">
                        <span className="font-bold">{"10,000"}원</span> 결제하기
                    </span>
                </div>
                
            </div>

        </>
    )
}