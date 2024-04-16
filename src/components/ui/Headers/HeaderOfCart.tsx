"use client"

import Home from "@/asset/images/home.svg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HeaderOfCart({ title }: { title: string }) {
  const router = useRouter()

  const handleAlert = () => {
    alert("현재 개발 중입니다.")
  }

  return (
    <header className="h-[45px] flex items-center border-b-[1px] border-[rgba(0, 0, 0, 0.07)] sticky top-0 shadow-md bg-white z-50">
      <div
        className="w-[50px] h-full items-center flex justify-center"
        onClick={() => router.back()}
      >
        <Image
          width="24"
          height="22"
          className="mx-auto"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="backButton"
        />
      </div>
      <h3 className="text-[14px] w-full text-center mx-auto relative left-[10px]">
        {title}
      </h3>
      <div
        className="w-[50px] h-full items-center flex justify-center"
        onClick={handleAlert}
      >
        <Image
          width="27"
          height="27"
          className="mx-auto"
          src="https://img.icons8.com/ios/27/search--v1.png"
          alt="searchIcon"
        />
      </div>
      <Link
        className="w-[50px] h-full items-center flex justify-center"
        href={"/home"}
      >
        <Image
          width="24"
          height="22"
          className="mx-auto"
          src={Home}
          alt="home"
        />
      </Link>
    </header>
  )
}
