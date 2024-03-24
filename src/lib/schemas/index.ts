import * as z from "zod"

export const CertificareSchema = z.object({})

export const SignupSchema = z.object({
  signinId: z
    .string({
      required_error: "아이디는 필수 입력 항목입니다.",
    })
    .regex(
      /^[A-Za-z0-9]{6,20}$/,
      "아이디는 영어 또는 숫자로 6~20자리여야 합니다.",
    )
    .trim(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
      "비밀번호는 영문, 숫자 조합 8~20자리여야 합니다.",
    )
    .trim(),
  name: z.string().min(1, {
    message: "이름은 필수 입력 항목입니다.",
  }),

  //TODO: 주소 입력 폼 받으면 zipcode, address, detailAddress로 나누기
  address: z.string().min(1, "주소는 필수 입력 항목입니다."),
  phone: z
    .string()
    .min(11, {
      message: "휴대폰번호는 필수 입력 항목입니다.",
    })
    .regex(
      /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/,
      "휴대폰 번호 형식이 올바르지 않습니다. (예: 010-1234-5678)",
    ),
  email: z.string().email({
    message: "이메일 형식에 맞지 않습니다. (예: user@ssg.com)",
  }),
})
