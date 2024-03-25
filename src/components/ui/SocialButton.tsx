import Image, { StaticImageData } from "next/image"
import naverLogo from "@/asset/images/naver.png"
import kakaoLogo from "@/asset/images/kakao.png"
import appleLogo from "@/asset/images/apple.png"
import tossLogo from "@/asset/images/toss.png"
import phoneLogo from "@/asset/images/phone.png"
import eamilLogo from "@/asset/images/simple-signup-email.png"
import Link from "next/link"

type SocialButtonProps = {
  src: string | StaticImageData
  alt: string
  text: string
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  src,
  alt,
  text,
}) => (
  <Link href={"#"} className="flex flex-col">
    <Image
      className="self-center rounded-full aspect-square"
      loading="lazy"
      src={src}
      alt={alt}
      width={51}
      height={51}
    />
    <p className="mt-2 text-center w-full">{text}</p>
  </Link>
)

export const socialSignin = [
  {
    src: naverLogo,
    alt: "네이버 로그인",
    text: "네이버",
  },
  {
    src: kakaoLogo,
    alt: "카카오 로그인",
    text: "카카오",
  },
  {
    src: appleLogo,
    alt: "애플 로그인",
    text: "애플",
  },
  {
    src: tossLogo,
    alt: "토스 로그인",
    text: "토스",
  },
  {
    src: phoneLogo,
    alt: "휴대폰 로그인",
    text: "휴대폰",
  },
]

export const socialSignup = [
  {
    src: eamilLogo,
    alt: "이메일 회원가입",
    text: "이메일",
  },
  {
    src: naverLogo,
    alt: "네이버 회원가입",
    text: "네이버",
  },
  {
    src: kakaoLogo,
    alt: "카카오 회원가입",
    text: "카카오",
  },
  {
    src: appleLogo,
    alt: "애플 회원가입",
    text: "애플",
  },
]
