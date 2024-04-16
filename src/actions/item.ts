"use server"

export type ItemBasicInfo = {
  itemName: string
  itemCode: string
  price: number
  discountRate: number
}

export async function getItemBasicInfo(
  itemId: string | number,
): Promise<ItemBasicInfo | null> {
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export type ItemCalcData = {
  reviewCount: number
  averageStar: number
}

export async function getItemCalc(
  itemId: string | number,
): Promise<ItemCalcData | null> {
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
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}

export type ItemBrandData = {
  id: number
  name: string
}

export async function getItemBrand(
  itemId: string | number,
): Promise<ItemBrandData | null> {
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
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}

export type ItemImagesData = {
  itemId: number
  itemImages: ItemImageType[]
}

export type ItemImageType = {
  imageId: number
  url: string
  alt: string
  thumbnail: boolean
}

export async function getItemImages(
  itemId: string | number,
): Promise<ItemImagesData | null> {
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
    const data = await res.json()
    return data.result
  } catch (error) {
    return null
  }
}

export type ThumbnailData = {
  itemId: number
  imageId: number
  url: string
  alt: string
}

export async function getItemThumbnail(
  itemId: string | number,
): Promise<ThumbnailData | null> {
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
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export async function getItemList() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/items`, {
      cache: "force-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      const data = await res.json()
      return data.result
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
