"use client"

import { signIn } from "next-auth/react"
import { SigninSchema } from "@/lib/schemas"
import AuthError from "next-auth"

export async function signin(initialState: any, formData: FormData) {
  const validateFields = SigninSchema.safeParse({
    signinId: formData.get("signinId"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { ...initialState, error: firstError }
  }

  const { signinId, password } = validateFields.data

  try {
    await signIn("credentials", {
      signinId: signinId,
      password: password,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error) {
        case "CredentialsSignin":
          return {
            ...initialState,
            error: "아이디 또는 비밀번호가 일치하지 않습니다.",
          }
        default:
          return { ...initialState, error: "비정상적인 접근입니다." }
      }
    }
    return { ...initialState, error: "비정상적인 접근입니다." }
  }
}
