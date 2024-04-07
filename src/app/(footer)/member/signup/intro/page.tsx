import Image from "next/image"
import React from "react"
import benefit1 from "@/asset/images/total-member-benefit1.png"
import benefit2 from "@/asset/images/total-member-benefit2.png"
import benefit3 from "@/asset/images/total-member-benefit3.png"
import Link from "next/link"
import SocialButton from "@/components/form/signinForm/SocialButton"
import { socialSignup } from "@/data/social"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function SignupIntroPage() {
  const session = await getServerSession(options)
  if (session) {
    redirect("/not-found")
  } else {
    return (
      <div>
        <div className="tracking-tighter leading-5">
          <h1 className="px-5 pb-6 pt-5 font-bold text-xl">
            믿고 사는 즐거움
            <br />
            SSG.COM에 오신것을 환영합니다.
          </h1>
          <h5 className="bg-[#F8F8F8] px-5 py-4 text-sm">
            신세계포인트 통합회원
          </h5>
          <p className="px-5 text-sm mt-5">
            신세계 유니버스 클럽 3개월 무료체험이 제공됩니다.
            <br />
            매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
          </p>
          <p className="px-5 mt-2 text-sm">
            * 멤버십은 3개월 후 자동 해지 됩니다.
          </p>
        </div>
        <div className="px-5 my-6 text-sm">
          <ul className="mt-4 mb-5 py-8 flex flex-col gap-5 justify-items-start px-10">
            <li className="flex flex-row gap-3 items-center">
              <Image src={benefit1} alt="멤버십 혜택1" width={109} />
              <span>
                멤버십 신규 가입 축하
                <br />
                1만원 할인 쿠폰
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Image src={benefit2} alt="멤버십 혜택2" width={109} />
              <span>
                매월 전상품
                <br />
                7% 할인 쿠폰
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <Image src={benefit3} alt="멤버십 혜택3" width={109} />
              <span>
                매월 전상품
                <br />
                5% 할인 쿠폰
              </span>
            </li>
          </ul>
          <div className="flex flex-col text-sm text-white font-black">
            <Link
              href={"/member/signup/agree"}
              className="flex items-center justify-center h-[52px] bg-[#FF5452]"
            >
              멤버십 혜택 받고 통합회원 가입하기
            </Link>
            <Link
              href={"/member/signup/agree"}
              className="flex items-center justify-center mt-3 h-[52px] bg-[#CCCCCC]"
            >
              통합회원만 가입하기
            </Link>
          </div>
        </div>
        <div>
          <h5 className="bg-[#F8F8F8] px-5 py-4 text-sm">간편회원</h5>
          <div className="flex flex-row px-5 gap-10 justify-center my-9 text-xs">
            {socialSignup.map((social, index) => (
              <SocialButton
                key={index}
                src={social.src}
                alt={social.alt}
                text={social.text}
                provider={social.provider}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
