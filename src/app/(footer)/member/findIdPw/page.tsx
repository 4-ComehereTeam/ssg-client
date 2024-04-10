import { options } from "@/app/api/auth/[...nextauth]/options"
import FindIdPwForm from "@/components/form/findIdPwForm/FindIdPwForm"
import { getServerSession } from "next-auth"
import { getToken } from "next-auth/jwt"
import { redirect } from "next/navigation"
import React from "react"

async function Page() {
  const session = await getServerSession(options)
  if (session) {
    redirect("/not-found")
  } else {
    return <FindIdPwForm />
  }
}

export default Page
