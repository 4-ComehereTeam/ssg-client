import SignupForm from "@/components/form/signupForm/SignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { redirect } from "next/navigation"

export default async function SignupFormPage() {
  const session = await getSession()
  if (session?.user.accessToken) {
    redirect("/not-found")
  }
  return (
    <>
      <HeaderToBack title={"신세계포인트 통합회원 가입"} />
      <SignupForm />
    </>
  )
}
