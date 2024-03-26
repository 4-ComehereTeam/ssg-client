"use server"

import { signIn } from "@/auth"
import { SigninSchema } from "@/lib/schemas"
import { AuthError } from "next-auth"
import bcrypt from "bcryptjs"

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

  // if (validateFields.success) {
  //   //TODO: getUserBySigninId 구현하기
  //   const user = await getUserBySigninId(signinId)
  //   if (!user || !user.password) return null

  //   const passwordsMatch = await bcrypt.compare(password, user.password)

  //   if (passwordsMatch) return user
  // }

  try {
    await signIn("credentials", {
      signinId,
      password,
      redirectTo: "/",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "아이디 또는 비밀번호가 일치하지 않습니다." }
        default:
          return { error: "비정상적인 접근입니다." }
      }
    }
    // return { error: "" }
  }
}
