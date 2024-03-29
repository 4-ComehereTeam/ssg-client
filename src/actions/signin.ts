"use server"

import { signIn } from "@/auth"
import { SigninSchema } from "@/lib/schemas"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export async function signin(initialState: any, formData: FormData) {
  const validateFields = SigninSchema.safeParse({
    signinId: formData.get("signinId"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { error: firstError }
  }

  const { signinId, password } = validateFields.data

  try {
    //auth의 credentialsProvider의 authorize 수행
    await signIn("credentials", {
      signinId: signinId,
      password: password,
      // redirectTo: "/",
      redirect: false,
    })
  } catch (error) {
    //credentials의 authorize에서 null이 던져지면 CredentialsSignin
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "아이디 또는 비밀번호가 일치하지 않습니다." }
        default:
          return { error: "비정상적인 접근입니다." }
      }
    }
    console.log(error)
    throw error
  } finally {
    redirect("/")
  }
}
