"use client"

import Image, { StaticImageData } from "next/image"
import { signIn } from "next-auth/react"

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
