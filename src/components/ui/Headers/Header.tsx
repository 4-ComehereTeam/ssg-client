"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

type HeaderPropsType = {
  title: string
}

function Header({ title }: HeaderPropsType) {
  const router = useRouter()
  return (
    <header className="flex justify-between pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300">
      <div
        className="w-[50px] flex item-center justify-center"
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
      <div className="flex-auto my-auto">{title}</div>
    </header>
  )
}

export default Header
