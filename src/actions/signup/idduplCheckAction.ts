"use server"

export const idDuplCheck = async (signinId: string) => {
  const res = await fetch(
    `https://2a5e4a8b-188f-4eb4-91d3-c89c22816845.mock.pstmn.io/id-duplicate-check?signinId=${signinId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
  const data = await res.json()
  return data
}
