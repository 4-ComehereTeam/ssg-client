import { options } from "@/app/api/auth/[...nextauth]/options"
import SigninForm from "@/components/form/signinForm/SigninForm"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "로그인, 믿고 사는 즐거움 SSG.COM",
  description: "로그인, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const session = await getServerSession(options)
  const callbackUrl = searchParams?.callbackUrl
  if (session?.user.accessToken) {
    if (callbackUrl && callbackUrl !== undefined) {
      redirect(callbackUrl)
    } else {
      redirect("/home")
    }
  } else {
    return (
      <>
        <HeaderToBackNotSticky title={"로그인"} />
        <SigninForm />
      </>
    )
  }
}

export default Page
