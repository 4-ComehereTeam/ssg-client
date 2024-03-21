import Link from "next/link"

//추후 폴더 기능 추가시 <ul>{clipfolders.map(folder => <li>{...}</li>)}</ul>
export default function ClipHeader() {
  return (
    <section>
      <ul className="pl-5 py-5 flex flex-row gap-4 text-xs text-center">
        <li>
          <div className="w-14 h-14 rounded-full bg-[#FF5452]"></div>
          <p className="pt-2">전체보기</p>
        </li>
        <li>
          <div className="w-14 h-14 rounded-full border border-zinc-200"></div>
          <p className="pt-2 text-zinc-400">새폴더</p>
        </li>
        <li>
          <div className="w-14 h-14 rounded-full border border-zinc-200"></div>
          <p className="pt-2 text-zinc-400">폴더관리</p>
        </li>
      </ul>
    </section>
  )
}
