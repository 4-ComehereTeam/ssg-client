import Image from "next/image";
import Link from "next/link";
import backArrow from "@/asset/images/backArrow.svg"

export default function Header2(){
    return(
        <>
            <div className="flex justify-between pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap shadow-md sticky top-0 bg-white">
                <Link href="#" className="w-[50px] flex item-center justify-center">
                    <Image loading="lazy" src={backArrow} alt="뒤로가기" />
                </Link>
                <div className="flex-auto my-auto">결제하기</div>
            </div>
        </>
    )
}