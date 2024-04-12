import { idDuplCheck } from "@/actions/signup/idduplCheckAction"
import { options } from "@/app/api/auth/[...nextauth]/options"
import SocialSignupForm from "@/components/form/signupForm/SocialSignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { SIGNIN_WITH_CALLBACK } from "@/routes"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function SimpleSignupFormPage() {
  const session = await getServerSession(options)
  if (session) {
    const session = await getSession()
    console.log(session)
    const isExistId = await idDuplCheck(session?.user.id)
    if (isExistId) {
      redirect(SIGNIN_WITH_CALLBACK)
    }
  }
  return (
    <>
      <HeaderToBack title={"간편회원 가입"} />
      <SocialSignupForm />
    </>
  )
}
