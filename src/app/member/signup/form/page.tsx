import SignupForm from "@/components/form/signupForm/SignupForm"
import Header from "@/components/Header"

//임시 user 데이터
const userInfo = {
  name: "시월이",
  phone: "010-1234-5678",
}

export default function SignupFormPage() {
  return (
    <>
      <Header title={"신세계포인트 통합회원 가입"} />
      <SignupForm userInfo={userInfo} />
    </>
  )
}
