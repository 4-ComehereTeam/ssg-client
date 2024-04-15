import { options } from "@/app/api/auth/[...nextauth]/options"
import SigninForm from "@/components/form/signinForm/SigninForm"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

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
      redirect("/")
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
