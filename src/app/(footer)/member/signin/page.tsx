import { idDuplCheck } from "@/actions/signup/idduplCheckAction"
import SigninForm from "@/components/form/signinForm/SigninForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getSession } from "@/lib/getSession"
import { redirect } from "next/navigation"

async function Page() {
  const session = await getSession()
  if (session) {
    console.log(session)
    const isExistId = await idDuplCheck(session?.user.id)
    if (!isExistId) {
      redirect("/member/signup/social")
    } else if (isExistId && session?.user.accessToken) {
      redirect("/myssg/main") //TODO: 이전페이지로 리다이렉트 콜백??
    }
  } else {
    return (
      <>
        <HeaderToBack title={"로그인"} />
        <SigninForm />
      </>
    )
  }
}

export default Page
