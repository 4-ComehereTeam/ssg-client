"use server"

import { revalidateTag } from "next/cache"

export async function deleteClip(memberId: number, itemId: number) {
  try {
    const res = await fetch(
      "https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          itemId: itemId,
        }),
      },
    )
    const data = await res.json()
    revalidateTag("clipCancle")
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteManyClips(memberId: number, itemIds: number[]) {
  try {
    const res = await fetch(
      "https://c47b4d94-6da3-46ae-9205-95a73f06e76b.mock.pstmn.io/clip-cancle",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: memberId,
          itemIds: itemIds,
        }),
      },
    )
    const data = await res.json()
    // revalidateTag("clipCancle")
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
