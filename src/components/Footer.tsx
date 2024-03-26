import Image from "next/image"
import Link from "next/link"
import React from "react"
import serviceLogo from "@/asset/images/serviceLogo.svg"

interface CustomerSupportSectionProps {
  phoneNumber: string
  email: string
  actions: { text: string }[]
}

interface SeparatorProps {
  className?: string
}

const Separator: React.FC<SeparatorProps> = ({ className }) => (
  <div className={`shrink-0 w-px h-3 bg-gray-400 ${className}`} />
)

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-row justify-between py-4 px-[15px] bg-zinc-500 text-[0.6rem] text-white">
        <div className="flex flex-row justify-start items-center">
          <Image
            src={serviceLogo}
            width={29}
            height={27}
            alt="고객센터 / 전자금융거래 분쟁처리"
          />
          <p className="leading-tight tracking-tighter">
            <span>SSG.COM 고객센터 / 전자금융거래 분쟁처리</span>
            <br />
            <span className="">1577-3419 /</span>
            <span className="">ssg@ssg.com</span>
          </p>
        </div>
        <div className="flex justify-center gap-[1px]">
          <button className="px-2 py-1 rounded border border-solid bg-[#66666D] border-[#606066]">
            전화걸기
          </button>
          <button className="px-2 py-1 rounded border border-solid bg-[#66666D] border-[#606066]">
            1:1 고객센터
          </button>
        </div>
      </div>
      <div className="relative h-[3em] px-[13px] text-xs text-center bg-[#DBDBE0] text-neutral-600">
        <ul className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-row justify-around w-[100%]">
          <li className="pl-[20px]">
            <Link href={"/member/signin"}>로그인</Link>
          </li>
          <Separator />
          <li>
            <Link href={"/member/signupIntro"}>회원가입</Link>
          </li>
          <Separator />
          <li>
            <Link href={"#"}>앱다운로드</Link>
          </li>
          <Separator />
          <li className="pr-[20px]">
            <Link href={"https://www.ssg.com/?usePCmode=Y"}>PC버전</Link>
          </li>
        </ul>
      </div>
      <address className="flex flex-col px-6 mt-3 w-full text-xs text-zinc-500 not-italic text-[0.6rem] leading-tight">
        <p className="font-bold">(주)에스에스지닷컴</p>
        <p className="mt-1.5">
          대표자: 이인영 | 사업자등록번호: 870-88-01143
          <br />
        </p>
        <p className="mt-1.5">
          통신판매업 신고번호: 제2022-서울강남-03751호
          <Link href={"#"} className="underline decoration-solid">
            사업자 정보확인
          </Link>
        </p>
        <p className="mt-1.5 mr-8">
          개인정보보호 책임자: 김우진 | 주소: 서울특별시 강남구 테헤란로 231
        </p>
        <p className="mt-1.5">
          호스팅서비스 사업자 : (주)에스에스지닷컴
          <br />
        </p>
        <p className="mt-3 font-bold">
          우리은행 채무지급보증 안내
          <Link
            href={"https://m.ssg.com/comm/popupWooriService.ssg"}
            className="pl-2 underline decoration-solid"
          >
            서비스가입사실 확인
          </Link>
        </p>
        <p className="mt-1">
          당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증
          계약을 체결하여 안전거래를 보장하고 있습니다.
        </p>
        <ul className="mt-6 flex flex-row flex-wrap">
          <li>
            <Link href={"https://company.ssg.com/"}>
              회사소개
              <span className="text-neutral-300 break-before-column mx-[7px]">
                |
              </span>
            </Link>
          </li>
          <li>
            <Link href={"https://member.ssg.com/m/policies/terms.ssg"}>
              이용약관<span className="text-neutral-300 mx-[7px]">|</span>
            </Link>
          </li>
          <li className="text-rose-500">
            <Link href={"https://member.ssg.com/m/policies/privacy.ssg"}>
              개인정보처리방침
              <span className="text-neutral-300 mx-[7px]">|</span>
            </Link>
          </li>
          <li>
            청소년보호방침<span className="text-neutral-300 mx-[7px]">|</span>
          </li>
          <li>
            <Link
              href={"https://member.ssg.com/m/policies/consumerDispute.ssg"}
            >
              소비자분쟁해결기준
              <span className="text-neutral-300 mx-[7px]">|</span>
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://partners.ssgadm.com/;jsessionid=BE40F2A3F579B3B8E4DD2BB942CE2773"
              }
            >
              입점상담
            </Link>
          </li>
        </ul>
        <p className="mt-5">
          ㈜에스에스지닷컴은 SSG.COM 실시간 항공권 서비스의 통신판매중개자로서
          거래 당사자가 아니며, 입점 판매사가 등록한 상품 정보 및 거래에 대해
          책임을 지지 않습니다.
        </p>
        <p>
          ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한
          무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업
          진흥법 등에 의하여 엄격히 금지됩니다.
        </p>
        <p className="mt-2">Copyright ⓒ SSG.COM Corp. All rights reserved.</p>
      </address>
    </footer>
  )
}

export default Footer
