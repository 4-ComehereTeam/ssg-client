export async function postPurchase() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/purchase`, {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const data = await res.json()
      console.log("postPurchase success:", data.httpStatus)
    } else {
      console.log("postPurchase fail:", res.status)
    }
  } catch (error) {
    console.log("postPurchase fail(error):", error)
  }
}
