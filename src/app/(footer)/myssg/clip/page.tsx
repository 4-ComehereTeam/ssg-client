import { options } from "@/app/api/auth/[...nextauth]/options"
import ClipHeader from "@/components/clip/ClipHeader"
import ClipMain from "@/components/clip/ClipMain"
import ClipNavbar from "@/components/clip/ClipNavbar"
import ItemCard from "@/components/item/ItemCard"
import { getServerSession } from "next-auth"
import React from "react"

async function getClipItemIds(accessToken: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/clip/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      next: { tags: ["getClipItemIds"] },
    })

    if (res.ok) {
      const data = await res.json()
      console.log("getClipItemIds success", data.httpStatus)
      // return data.itemIds
      return data.result.itemIds
    }
    console.log("getClipItemIds fail", res.status)
    return []
  } catch (error) {
    console.log("getClipItemIds fail(error)", error)
    return []
  }
}

export default async function ClipPage() {
  const session = await getServerSession(options)
  const accessToken = session ? session.user.accessToken : null
  const itemIds = await getClipItemIds(accessToken)

  return (
    <>
      <ClipHeader />
      <ClipNavbar clipNums={itemIds.length} />
      <ClipMain itemIds={itemIds}>
        {itemIds.map((itemId: number) => (
          <ItemCard key={`itemId`} itemId={itemId} />
        ))}
      </ClipMain>
    </>
  )
}
