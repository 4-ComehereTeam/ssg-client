"use server"

import { SignupSchema } from "@/lib/schemas"
import { checkExistingUserByEmail } from "./checkExistingUserByEmail"
import { MktReceiveMethodsType } from "@/types/agreementType"
import { getResignCount } from "./getResignCount"

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

const RESIGN_LIMIT_COUNT = 3

export async function createUser(initialState: any, formData: FormData) {
  const validateFields = SignupSchema.safeParse({
    signinId: formData.get("signinId"),
    checkId: formData.get("checkId"),
    isDuplId: formData.get("isDuplId"),
    password: formData.get("password"),
    name: formData.get("name"),
    gender: formData.get("gender"),
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
    console.log(errors)
    return { error: firstError }
  }

  const { signinId, password, name, gender, phone, email } = validateFields.data

  const addressInfo = {
    zipcode: formData.get("zipCode"),
    address: formData.get("fullAddress"),
    detailAddress: formData.get("detailAddress"),
  }

  const isNewUser = await checkExistingUserByEmail(email)
  if (!isNewUser) {
    return {
      error: "이미 회원으로 가입되어 있습니다.",
    }
  }

  const resignCount = await getResignCount(email)
  if (resignCount && resignCount >= RESIGN_LIMIT_COUNT) {
    return { error: "3회 이상 탈퇴 시 30일 후에 가입할 수 있습니다." }
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
    const res = await fetch(`${process.env.API_BASE_URL}/auth/signup`, {
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
        gender: gender,
        addressInfoVo: addressInfo,
        ssgcomAgreesVo: ssgcomAgrees,
        ssgPointAgreesVo: ssgPointAgrees,
      }),
    })
    const data = await res.json()
    if (data.isSuccess) {
    } else {
      throw data
    }
  } catch (error) {
    return { error: "회원가입에 실패했습니다." }
  }
}
