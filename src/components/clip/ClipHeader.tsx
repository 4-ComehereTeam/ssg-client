import Link from "next/link"
import "./clip.css"

export default function ClipHeader() {
  return (
    <section>
      <ul className="pl-5 py-5 flex flex-row gap-4 text-xs text-center">
        <li>
          <Link href="/myssg/clip" className="flex flex-col">
            <div className="flex-none relative">
              <div className="back"></div>
              <div className="heart"></div>
            </div>
            <p className="pt-2">전체보기</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}
