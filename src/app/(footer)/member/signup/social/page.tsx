import { idDuplCheck } from "@/actions/signup/idduplCheckAction"
import { options } from "@/app/api/auth/[...nextauth]/options"
import SocialSignupForm from "@/components/form/signupForm/SocialSignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "간편회원가입",
  description: "간편회원가입",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default async function SimpleSignupFormPage() {
  const session = await getServerSession(options)
  if (session) {
    const session = await getSession()
    const isExistId = await idDuplCheck(session?.user.id)
    if (isExistId) {
      redirect("/not-found")
    }
  }
  return (
    <>
      <HeaderToBack title={"간편회원가입"} />
      <SocialSignupForm />
    </>
  )
}
