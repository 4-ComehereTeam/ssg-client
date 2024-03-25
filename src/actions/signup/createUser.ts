"use server"

import { SignupSchema } from "@/lib/schemas"
import { SafeParseError } from "zod"

export type initialStateType = {
  error: SafeParseError<{
    signinId: string
    password: string
    name: string
    address: string
    phone: string
    email: string
  }>
}

export async function createUser(initialState: any, formData: FormData) {
  const validateFields = SignupSchema.safeParse({
    signinId: formData.get("signinId"),
    checkId: formData.get("checkId"),
    isDuplId: formData.get("isDuplId"),
    password: formData.get("password"),
    name: formData.get("name"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  })

  if (formData.get("password") !== formData.get("confirmPassword")) {
    return { error: "비밀번호가 일치하지 않습니다." }
  }

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    console.log(errors)
    const firstError = Object.values(errors)[0]
    return { error: firstError }
  }

  const { signinId, password, name, phone, email, address } =
    validateFields.data

  //TODO: 이미 존재하는 회원인지 서버랑 통신, 비밀번호 암호화, 회원정보 서버로 post
  // const hashedPassword = await bcrypt.hash(password, 10)

  // const existingUser = await getUserByEmail(email)

  // if (existingUser) {
  //   return {
  //     error: `이미 회원으로 가입되어 있습니다. ${signinId}로 서비스를 이용해주세요.`,
  //   }
  // }
}
