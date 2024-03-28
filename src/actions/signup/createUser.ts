"use server"

import { SignupSchema } from "@/lib/schemas"
import { SafeParseError } from "zod"
import { checkExistingUserByEmail } from "./checkExistingUserByEmail"
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
  const validateFields = SignupSchema.safeParse({
    signinId: formData.get("signinId"),
    checkId: formData.get("checkId"),
    isDuplId: formData.get("isDuplId"),
    password: formData.get("password"),
    name: formData.get("name"),
    fullAddress: formData.get("fullAddress"),
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

  const { signinId, password, name, phone, email } = validateFields.data

  //{zipcode, address, detailAddress} 받아오기
  const addressInfo = {
    zipcode: formData.get("zipCode"),
    address: formData.get("fullAddress"),
    detailAddress: formData.get("detailAddress"),
  }

  const existingUserResponse = await checkExistingUserByEmail(email)
  if (existingUserResponse) {
    return {
      error: "이미 회원으로 가입되어 있습니다.",
    }
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

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/members/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signinId: signinId,
        password: password,
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
    })
    if (res.ok) {
      const data = await res.json()
      console.log("signup success:", data)
    }
  } catch (error) {
    console.log("signup fail:", error)
    return { error: "알 수 없는 오류가 발생했습니다." }
  }
}
