import FindIdPwSection from "@/components/form/findIdPwForm/FindIdPwSection"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"
import { getSession } from "@/lib/getSession"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "아이디/비밀번호 찾기, 믿고 사는 즐거움 SSG.COM",
  description: "아이디/비밀번호 찾기, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

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
