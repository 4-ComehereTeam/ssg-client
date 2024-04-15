import FindIdPwSection from "@/components/form/findIdPwForm/FindIdPwSection"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"
import { getSession } from "@/lib/getSession"
import { redirect } from "next/navigation"

async function Page({ searchParams }: { searchParams: string }) {
  const session = await getSession()
  if (session?.user.accessToken) {
    redirect("/not-found")
  }
  const isFindId = Object.keys(searchParams)[0] === "id" ? true : false
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

export default Page
