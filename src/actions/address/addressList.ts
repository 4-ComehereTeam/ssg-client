export async function getAddressList() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/address/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getAddressList success:", data.httpStatus)
      return data.result
    }
    console.log("getAddressList fail", res.status)
    return false
  } catch (error) {
    console.log("getAddressList fail:", error)
    return false
  }
}