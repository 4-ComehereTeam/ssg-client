import SignupForm from "@/components/form/signupForm/SignupForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"

export default function SignupFormPage() {
  return (
    <>
      <HeaderToBack title={"신세계포인트 통합회원 가입"} />
      <SignupForm />
    </>
  )
}
