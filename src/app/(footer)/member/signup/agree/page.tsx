import { options } from "@/app/api/auth/[...nextauth]/options"
import SignupAgreeForm from "@/components/form/signupForm/SignupAgreeForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import React from "react"

export default async function SignupAgreePage() {
  const session = await getServerSession(options)
  if (session?.user.accessToken) {
    redirect("/not-found")
  } else {
    return (
      <>
        <HeaderToBack title="신세계포인트 통합회원 가입" />
        <SignupAgreeForm />
      </>
    )
  }
}
