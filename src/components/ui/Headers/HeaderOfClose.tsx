"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HeaderOfClose({ title }: { title: string }) {
  const router = useRouter()
  return (
    <header className="h-[45px] flex items-center justify-between sticky top-0 bg-white z-50">
      <h3 className="relative left-[50%] translate-x-[-50%] text-[16px] text-center font-bold">
        {title}
      </h3>
      <div
        className="w-[50px] h-full items-center flex justify-center"
        onClick={() => router.back()}
      >
        <Image
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/delete-sign--v1.png"
          alt="닫기"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </header>
  )
}
