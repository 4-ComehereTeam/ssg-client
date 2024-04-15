import SignupAgreeForm from "@/components/form/signupForm/SignupAgreeForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { redirect } from "next/navigation"
import React from "react"

export default async function SignupAgreePage() {
  const session = await getSession()
  if (session?.user.accessToken) {
    redirect("/not-found")
  }
  return (
    <>
      <HeaderToBack title="신세계포인트 통합회원 가입" />
      <SignupAgreeForm />
    </>
  )
}
