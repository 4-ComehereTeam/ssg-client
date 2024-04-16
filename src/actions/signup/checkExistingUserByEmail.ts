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
      return data.result ? true : false
    }
    return false
  } catch (error) {
    return false
  }
}
