"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeaderOfCategory() {
  const imageLoader = () => {
    return "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4"
  }
  return (
    <header className="py-2 px-2.5">
      <Link href={"/home"}>
        <Image
          loader={imageLoader}
          alt="SSG.COM"
          src="logo.png"
          width={86}
          height={40}
        />
      </Link>
    </header>
  )
}
