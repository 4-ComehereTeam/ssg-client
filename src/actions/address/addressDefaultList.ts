export async function getAddressDefaultList() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/address/default`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getAddressDefaultList success:", data.httpStatus)
      return data.result
    }
    console.log("getAddressDefaultList fail", res.status)
    return false
  } catch (error) {
    console.log("getAddressDefaultList fail:", error)
    return false
  }
}