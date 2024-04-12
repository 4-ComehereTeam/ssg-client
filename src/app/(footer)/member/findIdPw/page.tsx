import { options } from "@/app/api/auth/[...nextauth]/options"
import FindIdPwSection from "@/components/form/findIdPwForm/FindIdPwSection"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import React from "react"

async function Page({ searchParams }: { searchParams: string }) {
  const isFindId = Object.keys(searchParams)[0] === "id" ? true : false
  const session = await getServerSession(options)
  if (session) {
    redirect("/not-found")
  } else {
    return (
      <>
        <HeaderToBackNotSticky
          title="아이디/비밀번호 찾기"
          className="font-bold border-b-[#bcbcbc]"
        />
        <FindIdPwSection findId={isFindId} />
      </>
    )
  }
}

export default Page
