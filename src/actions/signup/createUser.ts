"use server"

import bcrypt from "bcryptjs"
import { SignupSchema } from "@/lib/schemas"
import { SafeParseError } from "zod"
import { getUserByEmail } from "./getUserByEmail"
import { MktReceiveMethodsType } from "@/types/agreementType"

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

  //마케팅 동의 뽑아내기
  const ssgPointAgrees: MktReceiveMethodsType = {
    ssgPointMktAgr1: false,
    ssgPointMktAgr2: false,
    ssgPointEmail: false,
    ssgPointSms: false,
    ssgPointMail: false,
    ssgPointCall: false,
  }
  const ssgcomAgrees: MktReceiveMethodsType = {
    ssgcomMktAgr1: false,
    ssgcomEmail: false,
    ssgcomSms: false,
  }
  formData.forEach((value, key) => {
    if (ssgPointAgrees.hasOwnProperty(key)) {
      ssgPointAgrees[key] = true
    }

    if (ssgcomAgrees.hasOwnProperty(key)) {
      ssgcomAgrees[key] = true
    }
  })

  //TODO: 이미 존재하는 회원인지 서버랑 통신, 비밀번호 암호화, 회원정보 서버로 post
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUserResponse = await getUserByEmail(email)
  console.log(existingUserResponse)
  if (existingUserResponse.result) {
    return {
      error: "이미 회원으로 가입되어 있습니다.",
    }
  }

  const res = await fetch(
    "https://2a5e4a8b-188f-4eb4-91d3-c89c22816845.mock.pstmn.io/create-user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signinId: signinId,
        password: hashedPassword,
        name: name,
        phone: phone,
        email: email,
        address: address,
        ssgPointAgrees: ssgPointAgrees,
        ssgcomAgrees: ssgcomAgrees,
        simpleMember: false,
        signupTime: new Date().toISOString(),
        gender: 0,
      }),
    },
  )
  const data = await res.json()
  console.log(data)
}
