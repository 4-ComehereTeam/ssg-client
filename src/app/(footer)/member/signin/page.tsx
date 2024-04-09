import { options } from "@/app/api/auth/[...nextauth]/options"
import SigninForm from "@/components/form/signinForm/SigninForm"
import HeaderToBack from "@/components/ui/Headers/HeaderToBack"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

async function Page() {
  const session = await getServerSession(options)
  console.log(session)
  if (session) {
    redirect("/not-found")
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
