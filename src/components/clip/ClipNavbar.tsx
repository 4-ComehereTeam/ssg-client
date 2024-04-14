import Link from "next/link"

export default function ClipNavbar({
  clipNums,
  categoryNums,
}: {
  clipNums: number
  categoryNums: number
}) {
  return (
    <nav className="text-sm bg-[#F5F5F5]">
      <ul className="px-4 py-5 flex flex-row gap-3">
        <li>
          <Link href={"/myssg/clip/item"}>
            <span>상품 ({clipNums})</span>
          </Link>
        </li>
        <li>
          <Link href={"/myssg/clip/category"}>
            <span>카테고리 ({categoryNums})</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
