"use client"

import Image, { StaticImageData } from "next/image"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { getSession } from "@/lib/getSession"
import { idDuplCheck } from "@/actions/signup/idduplCheckAction"

type SocialButtonProps = {
  src: string | StaticImageData
  alt: string
  text: string
  provider: string
}

export default function SocialButton({
  src,
  alt,
  text,
  provider,
}: SocialButtonProps) {
  const router = useRouter()
  return (
    <button
      onClick={async (e) => {
        e.preventDefault()
        await signIn(provider, { redirect: false })
      }}
    >
      <Image
        className="self-center rounded-full aspect-square"
        loading="lazy"
        src={src}
        alt={alt}
        width={51}
        height={51}
      />
      <p className="mt-2 text-center w-full">{text}</p>
    </button>
  )
}
