import { freqMenu } from "@/data/myssg"
import Image from "next/image"
import Link from "next/link"

export default function FreqMenu() {
  return (
    <section className="p-4">
      <p className="font-extrabold text-base">자주찾는 메뉴</p>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-y-3 gap-x-2 mb-10 mt-2 text-[12px]">
        {freqMenu.map((menu) => (
          <Link key={menu.id} href={menu.href}>
            <Image
              src={menu.src}
              alt={menu.alt}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={61}
              height={61}
            />
            <p className="text-center">{menu.alt}</p>
          </Link>
        ))}
      </div>
      <div className="flex items-center border py-2 rounded-xl text-[11px]">
        <Link href={"/not-found"} className="flex-1 text-center ">
          고객센터
        </Link>
        <Link href={"/not-found"} className="text-gray-200 text-sm">
          |
        </Link>
        <Link href={"/not-found"} className="flex-1 text-center">
          e-mail 상담/답변
        </Link>
      </div>
    </section>
  )
}
