"use client"

import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()

  return (
    <section className="p-4">
      <div>
        <h1 className="text-xl">{session?.user.name} 님</h1>
        <h2 className="font-extrabold mt-4 text-base">
          SSG에서 즐거운 쇼핑 되세요!
        </h2>
      </div>
    </section>
  )
}
