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
    console.log("idDuplCheck success:", data)
    return data.result ? false : true
  } catch (error) {
    console.log("idDuplCheck fail:", error)
    return true
  }
}
