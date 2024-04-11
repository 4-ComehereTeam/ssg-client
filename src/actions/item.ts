"use server"

export async function getItemBasicInfo(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/detail/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemBasicInfo success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemBasicInfo fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemBasicInfo fail:", error)
    return null
  }
}

export async function getItemDescription(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/description/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemDescription success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemDescription fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemDescription fail:", error)
    return null
  }
}

export async function getItemCalc(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/calc/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemCalc success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemCalc fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemCalc fail:", error)
    return null
  }
}

export async function getItemBrand(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/brand/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemBrand success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemBrand fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemBrand fail:", error)
    return null
  }
}

export async function getItemImages(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/images/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemImages success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemImages fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemImages fail:", error)
    return null
  }
}

export async function getItemThumbnail(itemId: string | number) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/items/thumbnail/${itemId}`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json()
      console.log("getItemThumbnail success:", data.httpStatus)
      return data.result
    } else {
      console.log("getItemThumbnail fail:", res.status)
      return null
    }
  } catch (error) {
    console.log("getItemThumbnail fail(error):", error)
    return null
  }
}

export async function getItemList(){
  try{
    const res = await fetch(
      `${process.env.API_BASE_URL}/items`,
      {
        cache : "force-cache",
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
      }
    )
    if(res.ok) {
      const data = await res.json()
      console.log("getItemList success :", data.httpStatus)
      return data.result
    } else {
      console.log("getItemList fail :", res.status)
      return null
    }
  } catch (error){
    console.log("getItemList fail(erroe) :", error)
    return null
  }
}