"use server"

import { SimpleSignupSchema } from "@/lib/schemas"
import { checkExistingUserByEmail } from "./checkExistingUserByEmail"
import { MktReceiveMethodsType } from "@/types/agreementType"
import { getResignCount } from "./getResignCount"
import { getSession } from "@/lib/getSession"

const ssgcomAgrees: MktReceiveMethodsType = {
  ssgcomMktAgr1: false,
  ssgcomEmail: false,
  ssgcomSms: false,
}

const RESIGN_LIMIT_COUNT = 3

export async function createSimpleUser(initialState: any, formData: FormData) {
  const validateFields = SimpleSignupSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    gender: formData.get("gender"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { error: firstError }
  }

  const { name, phone, email, gender } = validateFields.data

  const isNewUser = await checkExistingUserByEmail(email)
  if (!isNewUser) {
    return {
      error: "이미 회원으로 가입되어 있습니다.",
    }
  }

  const resignCount = await getResignCount(email)
  if (resignCount >= RESIGN_LIMIT_COUNT) {
    return { error: "3회 이상 탈퇴 시 30일 후에 가입할 수 있습니다." }
  }

  //마케팅 동의 뽑아내기
  formData.forEach((value, key) => {
    if (ssgcomAgrees.hasOwnProperty(key)) {
      ssgcomAgrees[key] = true
    }
  })

  const session = await getSession()
  console.log("in createSimpleUser:", session)

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/oauth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        id: session?.user.id,
        phone: phone,
        gender: gender,
      }),
    })
    const data = await res.json()
    if (data.isSuccess) {
      console.log("signup success:", data.httpStatus)
    } else {
      throw data
    }
  } catch (error) {
    console.log("signup error:", error)
    return { error: "회원가입에 실패했습니다." }
  }
}
