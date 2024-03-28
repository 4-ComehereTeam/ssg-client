"use server"

export const idDuplCheck = async (signinId: string) => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/members/signInId/check?signinId=${signinId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("check duplicated id success:", data)
      return data
    }
    return null
  } catch (error) {
    console.log("check duplicated id fail:", error)
  }
}
