"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HeaderToBack({ title }: { title: string }) {
  const router = useRouter()
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
      <h3 className="text-[14px] w-[calc(100vw-44px)] text-center mx-auto relative right-[25px]">
        {title}
      </h3>
    </header>
  )
}
