import SignupForm from "@/components/form/signupForm/SignupForm"

//임시 member 데이터
const member = {
  name: "시월이",
  phone: "010-1234-5678",
}

export default function SignupFormPage() {
  return <SignupForm member={member} />
}
