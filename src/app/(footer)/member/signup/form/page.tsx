import { options } from "@/app/api/auth/[...nextauth]/options"
import SignupForm from "@/components/form/signupForm/SignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function SignupFormPage() {
  const session = await getServerSession(options)
  if (session) {
    redirect("/not-found")
  } else {
    return (
      <>
        <HeaderToBack title={"신세계포인트 통합회원 가입"} />
        <SignupForm />
      </>
    )
  }
}
