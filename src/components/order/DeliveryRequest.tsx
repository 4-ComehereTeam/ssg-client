'use client'

import DeliveryRequestModal from "@/components/DeliveryRequestModal";
import { useState } from "react";

export default function DeliveryRequest(){

    const [DeliveryRequestModalOpen, setDeliveryRequestModalOpen] = useState(false);

    return(
        <>
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
        </>
    )
}