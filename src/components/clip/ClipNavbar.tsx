type ClipNumsType = {
  [key: string]: number
}

type ClipNavbarProps = {
  clipNums: ClipNumsType
}

export default function ClipNavbar({ clipNums }: { clipNums: number }) {
  //브랜드, 카테고리 좋아요는 페이지 따로 만들기
  return (
    <nav className="text-sm bg-[#F5F5F5]">
      <ul className="px-4 py-5 flex flex-row gap-3">
        <li>
          <button>
            <span>상품 ({clipNums})</span>
          </button>
        </li>
        <li>
          <span>브랜드&스토어 (0)</span>
        </li>
        <li>
          <span>카테고리 (0)</span>
        </li>
      </ul>
    </nav>
  )
}
