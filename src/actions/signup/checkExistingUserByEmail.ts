export async function checkExistingUserByEmail(email: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/email/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    if (res.ok) {
      const data = await res.json()
      console.log("get user by email success:", data)
      return data?.result
    }
    return null
  } catch (error) {
    console.log("get user by email fail:", error)
  }
}
