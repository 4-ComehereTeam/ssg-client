"use server"

import {
  FindIdSchema,
  FindPwSchema,
  FindUserByEmailSchema,
} from "@/lib/schemas"

export async function findUserByEmail(initialState: any, formData: FormData) {
  const validateFields = FindUserByEmailSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { error: firstError, isExistingMember: false }
  }

  const { email } = validateFields.data

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/email/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    if (res.ok) {
      const data = await res.json()
      console.log("findUserByEmail success:", data)
      if (data.result) {
        return { error: "존재하지 않는 회원입니다.", isExistingMember: false }
      } else {
        return { error: "", isExistingMember: true }
      }
    }
  } catch (error) {
    console.log("findUserByEmail error:", error)
    return { error: "존재하지 않는 회원입니다.", isExistingMember: false }
  }
}
export async function findId(initialState: any, formData: FormData) {
  const validateFields = FindIdSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { ...initialState, error: firstError }
  }

  const { email, name } = validateFields.data

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/find/signinId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    })
    const data = await res.json()
    if (data.result) {
      console.log("findSigninId success:", data.httpStatus)
      return { ...initialState, signinId: data.result.signinId }
    }
    throw data.httpStatus
  } catch (error) {
    console.log("findSigninId error:", error)
    return { ...initialState, error: "존재하지 않는 회원입니다." }
  }
}

export async function findPwModify(initialState: any, formData: FormData) {
  const validateFields = FindPwSchema.safeParse({
    newPassword: formData.get("newPassword"),
  })

  if (!validateFields.success) {
    const errors = validateFields.error.flatten().fieldErrors
    const firstError = Object.values(errors)[0]
    return { error: firstError }
  }

  const { newPassword } = validateFields.data

  if (newPassword !== formData.get("confirmPassword")) {
    return { error: "비밀번호가 일치하지 않습니다." }
  }

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/find/password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        name: formData.get("name"),
        newPassword: newPassword,
      }),
    })
    const data = await res.json()
    console.log("findPwModify success:", data.httpStatus)
  } catch (error) {
    console.log("findPwModify error:", error)
    return { error: "비밀번호 변경에 실패했습니다." }
  }
}
