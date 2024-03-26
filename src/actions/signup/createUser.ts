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

type AddressInfoType = {
  zipcode: string
  address: string
  detailAddress: string
}

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

export async function createUser(initialState: any, formData: FormData) {
  // initialState = { error: "" }
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
    const firstError = Object.values(errors)[0]
    return { error: firstError }
  }

  const { signinId, password, name, phone, email, address } =
    validateFields.data

  const existingUserResponse = await getUserByEmail(email)

  if (existingUserResponse.result) {
    return {
      error: "이미 회원으로 가입되어 있습니다.",
    }
  }

  //주소 나누기
  const splitAddress = address.split(" / ")
  const addressInfo: AddressInfoType = {
    zipcode: splitAddress[0],
    address: splitAddress[1],
    detailAddress: splitAddress[2] ? splitAddress[2] : "",
  }

  //마케팅 동의 뽑아내기
  formData.forEach((value, key) => {
    if (ssgPointAgrees.hasOwnProperty(key)) {
      ssgPointAgrees[key] = true
    }

    if (ssgcomAgrees.hasOwnProperty(key)) {
      ssgcomAgrees[key] = true
    }
  })

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
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
          addressInfo: addressInfo,
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
  } catch (error) {
    console.log(error)
    return { error: "알 수 없는 오류가 발생했습니다." }
  }
}
