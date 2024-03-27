"use client"

import Image from "next/image";
import Link from "next/link";
import backArrow from "@/asset/images/backArrow.svg"
import { useState } from "react";
import Header2 from "@/components/Header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Header2 from "@/components/Header2";
import SelectAddressModal from "@/components/SelectAddressModal";
import DeliveryRequestModal from "@/components/DeliveryRequestModal";
import ChangeOrdererInformModal from "@/components/ChangeOrdererInformModal";

export default function OrderPage(){

    const [payList, setPayList] = useState(false);
    const [agreement, setAgreement] = useState(false);
    const [SelectAddressModalOpen, setSelectAddressModalOpen] = useState(false);
    const [DeliveryRequestModalOpen, setDeliveryRequestModalOpen] = useState(false);
    const [changeOrdererInformModalOpen, setChangeOrdererInformModalOpen] = useState(false);

    return(
        <>

            <Header2 />
            <div className="bg-[#f5f5f5]">

                <div className="bg-white m-4 p-4 rounded-xl">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">
                            배송지 : {"홍길동"}
                        </h2>
                        <button className="border-[1px] border-[#d8d8d8] px-2 text-xs"
                            onClick={()=>{
                                setSelectAddressModalOpen(true)
                            }}>
                        변경
                        </button>
                        <SelectAddressModal modalOpen={SelectAddressModalOpen} setModalOpen={setSelectAddressModalOpen}/>
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
                        <button className="border-[1px] px-2 text-xs border-[#d8d8d8]"
                        onClick={()=>{
                            setDeliveryRequestModalOpen(true)
                        }}
                        >변경</button>
                        <DeliveryRequestModal modalOpen={DeliveryRequestModalOpen} setModalOpen={setDeliveryRequestModalOpen}/>
                    </div>
                    <div>
                        <span className="text-xs text-[#888888] w-32 inline-block">
                            택배배송 요청사항
                        </span>
                        <span className="text-xs">
                            {"없음"}
                        </span>
                    </div>
                </div>

                <div className={payList ? "bg-white m-4 p-2 rounded-xl h-96" : "bg-white m-4 p-2 rounded-xl"}>
                    <div className=" pb-2">
                        <span className="text-[18px] font-semibold my-5 mx-2">
                            결제방법
                        </span>
                    </div>
                    <hr className="bg-[#9b9b9b] h-[0.3px]"/>
                    <div className="my-4 ml-2">
                        <div className="flex items-center">
                            <input type="radio" 
                            onClick={() => {setPayList(true)}}
                            className=" accent-red-500 border-[2px solid #ccc] w-4 h-4 rounded-full cursor-pointer peer"
                            /> 
                            <span className="ml-2 peer-checked:font-extrabold">일반결제</span>
                        </div>
                        { payList && <PayList />}
                    </div>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl tracking-[-0.3px]">
                    <div className="flex justify-between text-lg mb-2 font-extrabold">
                        <span>
                            결제예정금액
                        </span>
                        <span>
                            {"10,000"}원
                        </span>
                    </div>
                    <hr className="bg-[#9b9b9b] h-[0.3px]"/>
                    <div className="mt-2 text-sm">
                        <div className="flex justify-between">
                            <span>주문금액</span>
                            <span>{"30,000"}원</span>
                        </div>
                        <div className="flex justify-between my-1">
                            <span>배송비</span>
                            <span>+ {"3,000"}원</span>
                        </div>
                        <div className="flex justify-between my-1">
                            <span>할인금액</span>
                            <span className="text-[red]">- {"23,000"}원</span>
                        </div>
                        <div className="flex justify-between text-[#888888]">
                            <span className="">└ 상품할인</span>
                            <span>- {"23,000"}원</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white m-4 rounded-xl text-center">
                    <div className="items-center p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-xs">
                                주문정보 및 서비스 약관에 동의합니다.
                            </span>
                            <button onClick={()=>{setAgreement(!agreement)}}>
                                { agreement ?
                                    <FontAwesomeIcon icon={faCaretUp} className="text-[#969696]"/> :
                                    <FontAwesomeIcon icon={faCaretDown} className="text-[#969696]"/>
                                }
                            </button>
                        </div>
                        { agreement &&
                            <div className="flex text-xs justify-between pt-2">
                                <div>
                                    <span className="text-[#b8b8b8]">└</span> 전자금융거래 이용약관
                                </div>
                                <div>
                                    <Link href={"#"} className="underline text-[#969696]">약관보기</Link>
                                </div>
                            </div>
                        }
                    </div>
                    <button className="bg-[#ff5452] w-full rounded-b-xl text-white h-[50px] font-bold">결제하기</button>
                </div>

                <div className="bg-white m-4 p-4 rounded-xl tracking-[-0.3px]">
                    <div className="flex justify-between mb-2">
                        <span className="text-lg font-bold">
                            주문자 정보
                        </span>
                        <button className="border-[1px] px-2 text-xs border-[#d8d8d8]"
                        onClick={()=>{
                            setChangeOrdererInformModalOpen(true)
                        }}>
                            변경
                        </button>
                        <ChangeOrdererInformModal modalOpen={changeOrdererInformModalOpen} setModalOpen={setChangeOrdererInformModalOpen} />
                    </div>
                    <div className="bg-white rounded-xl p-[10px 16px 20px 16px] ">
                        <dl className="flex mt-[3px] text-[14px]">
                            <dt className="w-[120px] text-[#666666]">
                                <span>주문자명</span>
                            </dt>
                            <dd>
                                <span>{"홍길동"}</span>
                            </dd>
                        </dl>
                        <dl className="flex mt-[3px] text-[14px]">
                            <dt className="w-[120px] text-[#666666]">
                                <span>연락처</span>
                            </dt>
                            <dd>
                                <span>{"010-0000-0000"}</span>
                            </dd>
                        </dl>
                        <dl className="flex mt-[3px] text-[14px]">
                            <dt className="w-[120px] text-[#666666]">
                                <span>이메일</span>
                            </dt>
                            <dd>
                                <span>{"gildong@naver.com"}</span>
                            </dd>
                        </dl>
                        <dl className="flex mt-[3px] text-[14px]">
                            <dt className="w-[120px] text-[#666666]">
                                <span>품절시 환불</span>
                            </dt>
                            <dd>
                                <span>{"주문 시 결제수단으로 환불받기"}</span>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="bg-white rounded-xl m-4 mb-20">
                    <div className="flex justify-between pt-[15px] px-[16px]">
                        <span className="text-lg font-semibold">택배배송</span>
                    </div>
                    <div className="flex px-[16px] py-[15px]">
                        <div className="flex justify-between">
                            <Image src={"https://sitem.ssgcdn.com/74/87/78/item/1000531788774_i1_140.jpg"} alt="한우" width={150} height={150}/>
                        </div>
                        <div className="flex flex-col justify-between text-xs mx-2">
                            <div>
                                <span>{"이마트몰"}</span>
                                <span className="text-[#666666]">{" 주식회사 태성축산유통"}</span>
                            </div>
                            <div>
                                <span className="font-extrabold">{"구미우"}</span>
                                <span>{"[냉장]1++No9등급 투뿔 한우 특수부위 구이용 300g (안창살or치마살or제비추리or토시살)"}</span>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <span className="line-through mr-2 text-[#666666]">{"59,700"}원</span>
                                    <span className="font-extrabold">{"35,820"}원</span>
                                </div>
                                <span className="text-[#666666]">수량{"1"}개</span>
                            </div>
                        </div>
                    </div>

                </div>

                <Link href={"/order/complete"}>
                    <div className="bg-[#ff5452] p-4 fixed right-0 left-0 bottom-0 z-10 text-center">
                        <span className="text-white font-normal">
                            <span className="font-bold">{"10,000"}원</span> 결제하기
                        </span>
                    </div>
                </Link>
                
            </div>

        </>
    )
}

function PayList(){
    return(
        <>
        <div className="h-60 bg-white w-full my-5 text-[14px]">
            <ul>
                <div className="w-full flex">
                    <li className="m-1 flex-1 inline-block float-left ">
                        <input type="radio" id="select" className="hidden peer" name="paying" defaultChecked/>
                        <label htmlFor = "select" className="w-full border-[1px] min-h-[50px] flex justify-center items-center bg-white peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-center text-[13px] peer-checked:border-0">신용카드</label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select2" name="paying" className="hidden peer"/>
                        <label htmlFor = "select2" className="w-full relative justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">
                            SSG<span className="text-red-500">PAY.</span>
                            <span className="absolute text-[8px] bg-[#d8d8d8] px-1 top-0 left-0">APP</span>
                        </label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select3" name="paying" className="hidden peer"/>
                        <label htmlFor = "select3" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">kakaoPay</label>
                    </li>
                </div>
                <div className="w-full flex">
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select4" name="paying" className="hidden peer"/>
                        <label htmlFor = "select4" className="w-full justify-center text-red-700 font-bold items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[15px] peer-checked:border-0">
                            PAYCO</label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select5" name="paying" className="hidden peer"/>
                        <label htmlFor = "select5" className="w-full justify-center text-blue-900 font-bold items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">
                            SAMSUNG <br/>Pay</label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select6" name="paying" className="hidden peer"/>
                        <label htmlFor = "select6" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">휴대폰 소액결제</label>
                    </li>
                </div>
                <div className="w-full flex">
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select7" name="paying" className="hidden peer"/>
                        <label htmlFor = "select7" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">무통장 입금</label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select8" name="paying" className="hidden peer"/>
                        <label htmlFor = "select8" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">실시간 계좌이체</label>
                    </li>
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select9" name="paying" className="hidden peer"/>
                        <label htmlFor = "select9" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">해외발급 신용카드</label>
                    </li>
                </div>
                <div className="w-1/3 flex">
                    <li className="m-1 flex-1 inline-block float-left">
                        <input type="radio" id="select10" name="paying" className="hidden peer"/>
                        <label htmlFor = "select10" className="w-full justify-center items-center text-center min-h-[50px] flex bg-white border-[1px] peer-checked:bg-black peer-checked:text-white peer-checked:font-bold text-[13px] peer-checked:border-0">Alipay</label>
                    </li>
                </div>
            </ul>
        </div>
        </>
    )
}