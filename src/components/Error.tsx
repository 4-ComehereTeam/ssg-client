"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Error() {
  const router = useRouter()
  return (
    <main className="w-full px-[30px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
      <div className=" flex flex-col items-center text-center">
        <Image
          src="https://sui.ssgcdn.com/ui/ssg/img/common/notice/err_404@2x.png"
          alt="존재하지 않는 페이지"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "140px", height: "170.06px" }}
          priority
        />

        <h1 className="text-[20px] font-extrabold mt-[30px] leading-6">
          원하셨던
          <br /> 페이지가 아닌가요?
        </h1>
        <p className="mt-[15px] text-[#9B9B9B]">
          방문하신 페이지가
          <br />
          변경 혹은 삭제되었을 수 있어요.
          <br />
          이전 페이지에서 다시 한번 시도해 주세요.
        </p>
        <button
          onClick={() => router.back()}
          className="h-[52px] mt-[30px] w-[50%] bg-[#222222] text-white rounded-lg"
        >
          이전페이지로 돌아가기
        </button>
      </div>
    </main>
  )
}
