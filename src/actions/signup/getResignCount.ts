"use server"

export async function getResignCount(email: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/resign/count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getResignCount success:", data.code)
      return data.result
    }
  } catch (error) {
    console.log("getResignCount fail:", error)
  }
}
