/**
 * 로그인이 필요한 라우트들
 * @type {string[]} 전체 라우트 또는 공통 라우트
 */
export const authRequeiredRoutes = ["/myssg/"]

/**
 * 인증된 사용자는 접근할 수 없는 라우트들
 * @type {string[]}
 */
export const protectedRoutes = [
  "/member/findIdPw",
  "/member/signin",
  "/member/signup/intro",
  "/member/signup/agree",
  "/member/signup/form",
]

/**
 * 이 값으로 시작하는 라우트는 authentication API에 사용됨
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * 로그인 후 리다이렉트되는 주소
 */
export const DEFAULT_REDIRECT =
  typeof window !== "undefined" ? window.location.href : ""

export const SIGNIN_WITH_CALLBACK = `/member/signin?callbackUrl=${DEFAULT_REDIRECT}`
