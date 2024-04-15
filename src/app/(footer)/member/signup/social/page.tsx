import { idDuplCheck } from "@/actions/signup/idduplCheckAction"
import { options } from "@/app/api/auth/[...nextauth]/options"
import SocialSignupForm from "@/components/form/signupForm/SocialSignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

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
      <HeaderToBack title={"간편회원 가입"} />
      <SocialSignupForm />
    </>
  )
}
