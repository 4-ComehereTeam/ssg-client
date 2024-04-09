"use server"

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

/**
 * 서버컴포넌트 또는 서버 사이드에서만 호출
 * @return {Session | null} Session - 사용자 정보가 들어있는 Object로, 변수에 담아 프로퍼티에 접근할 수 있음.
 * 예시: { user: { name: 'Jobs', email: 'Jobs@ex.com', signinId: '....', id: '...', accessToken: '...', ... }}
 */
export async function getSession() {
  const session = await getServerSession(options)
  return session
}
