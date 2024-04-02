"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function HeaderOfItem({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={` ${
        showHeader ? "block" : "hidden"
      } transition-opacity duration-300 sticky top-0 bg-white z-[1000] flex justify-between items-center pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300`}
    >
      <div className="w-[50px] h-[30px]" onClick={() => router.back()}>
        <Image
          width="26"
          height="20"
          className="mx-auto"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="backButton"
        />
      </div>
      <div className="flex-auto my-auto">
        <ul className="flex flex-row justify-center gap-8 font-bold">
          <li>
            <Link href={"#"}>
              상세<span></span>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <p className="mb-[-9px]">리뷰</p>
              {children}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
