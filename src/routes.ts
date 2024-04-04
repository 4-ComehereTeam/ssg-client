/**
 * authentication이 요구되는 라우트들
 * 로그인한 사용자는 접근 못해야함
 * @type {string[]}
 */
export const protectedRoutes = [
  "/member/signin",
  "/member/signupIntro",
  "/member/signup/agree",
  "/member/signup/form",
  "/member/findIdPw",
]

/**
 * API authentication 라우트의 공통 부분
 * 이 부분으로 시작하는 라우트는 API authentication에 사용됨
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * 로그인 후 리다이렉트되는 페이지
 * @type {string}
 */
export const DEFAULT_SIGNIN_REDIRECT = "/"
