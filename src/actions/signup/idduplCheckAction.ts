"use server"

export const idDuplCheck = async (signinId: string) => {
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
    if (res.ok) {
      const data = await res.json()
      console.log("check duplicated id success:", data.httpStatus)
      return data.result
    }
  } catch (error) {
    console.log("check duplicated id fail:", error)
  }
}
