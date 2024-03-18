import Image from "next/image";
import Link from "next/link";

export default function TopNav(){

    return(
        <>
            <nav className="overflow-auto w-full top-0 left-0 sticky z-50 bg-white">
                <ul className="flex justify-between text-[15px] leading-3 font-medium font-[pretendard]  whitespace-nowrap">
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">홈</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">특가</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">베스트</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">명품</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">뷰티</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">패션</Link>
                    </li>
                    <li className="my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"><Image alt="쓱TV" src="https://sui.ssgcdn.com/cmpt/banner/202402/2024022816022058499040766014_217.png" width={60} height={46} priority className="mx-auto"/></Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#">브랜드</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}