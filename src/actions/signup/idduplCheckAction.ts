"use server"

export const idDuplCheck = async (signinId: string) => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/auth/signInId/check?signinId=${signinId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    console.log(res.status)
    if (res.ok) {
      const data = await res.json()
      console.log("check duplicated id success:", data)
      return data.result
    }
  } catch (error) {
    console.log("check duplicated id fail:", error)
  }
}
