"use server"

export async function getIsdormancyMember(signinId: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/dormancy/state`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signinId: signinId,
      }),
    })
    const data = await res.json()
    console.log("getIsdormancyMember success:", data.httpStatus)
    return data.result
  } catch (error) {
    console.log("getIsdormancyMember error:", error)
    return null
  }
}
