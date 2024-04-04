import SigninForm from "@/components/form/signinForm/SigninForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"

function Page() {
  return (
    <>
      <HeaderToBack title={"로그인"} />
      <SigninForm />
    </>
  )
}

export default Page
