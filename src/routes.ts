const DEFAULT_REDIRECT =
  typeof window !== "undefined" ? window.location.href : ""

/**
 * 로그인 후 리다이렉트되는 주소.
 * 클라이언트 사이드에서만 사용할 수 있음
 */
export const SIGNIN_WITH_CALLBACK = `/member/signin?callbackUrl=${DEFAULT_REDIRECT}`
