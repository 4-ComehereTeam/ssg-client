import SignupAgreeForm from "@/components/form/signupForm/SignupAgreeForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import React from "react"

export default async function SignupAgreePage() {
  return (
    <>
      <HeaderToBack title="신세계포인트 통합회원 가입" />
      <SignupAgreeForm />
    </>
  )
}
