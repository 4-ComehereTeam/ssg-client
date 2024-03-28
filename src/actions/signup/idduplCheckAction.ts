"use server"

export const idDuplCheck = async (signinId: string) => {
  try {
    const res = await fetch(
      `http://13.209.125.11:8080/api/v1/members/signInId/check?signinId=${signinId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
