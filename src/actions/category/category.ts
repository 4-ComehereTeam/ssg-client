export async function getCategories() {
    try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )

    if (res.ok) {
      const data = await res.json()
      console.log("get categories success:", data)
      return data
    }
    return null
  } catch (error) {
    console.log("get categories fail:", error)
  }
}