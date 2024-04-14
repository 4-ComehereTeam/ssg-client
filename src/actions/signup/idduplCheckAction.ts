"use server"

export async function idDuplCheck(signinId: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/auth/signInId/check?signinId=${signinId}`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    const data = await res.json()
    console.log("idDuplCheck success:", data.httpStatus)
    return data.result ? false : true //중복되지(존재하지) 않으면 false, 중복되면(존재하면) true 반환
  } catch (error) {
    console.log("idDuplCheck fail:", error)
    return true
  }
}
