import { getClip } from "@/actions/clip/itemClip"
import { getItemBasicInfo, getItemImages } from "@/actions/item"
import { getItemOptionExist } from "@/actions/itemOption"
import ItemBottomBar from "@/components/item/ItemBottomBar"
import ItemDescription from "@/components/item/ItemDescription"
import ItemImage from "@/components/item/ItemImage"
import ItemInfo from "@/components/item/ItemInfo"
import ReviewCntOfItem from "@/components/item/review/ReviewCntOfItem"
import ReviewContainer from "@/components/item/review/ReviewContainer"
import HeaderOfItem from "@/components/ui/Headers/HeaderOfItem"
import { Skeleton } from "@/components/ui/Skeleton"
import { notFound } from "next/navigation"

export type convertedOptionExistType = {
  color: boolean | undefined
  size: boolean | undefined
  etc: boolean | undefined
}

export async function generateMetadata({
  params,
}: {
  params: { itemId: string }
}) {
  const basicInfo = await getItemBasicInfo(params.itemId)
  let name = ""
  if (basicInfo) {
    name = `${basicInfo.itemName}, `
  }
  return {
    title: name + "믿고 사는 즐거움 SSG.COM",
    icons: {
      icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
    },
  }
}

export default async function ItemDetailPage({
  params,
}: {
  params: { itemId: string }
}) {
  const basicInfo = await getItemBasicInfo(params.itemId)

  const itemImages = await getItemImages(params.itemId)
  const isCliped: boolean = await getClip(params.itemId)
  const optionExist = await getItemOptionExist(params.itemId)
  const convertedOptionExist: convertedOptionExistType = {
    color: optionExist?.hasColor,
    size: optionExist?.hasSize,
    etc: optionExist?.hasEtc,
  }

  if (!basicInfo) {
    notFound()
  }

  return (
    <main className="overflow-hidden">
      <HeaderOfItem>
        <ReviewCntOfItem itemId={params.itemId} />
      </HeaderOfItem>
      {itemImages ? (
        <ItemImage images={itemImages.itemImages} />
      ) : (
        <div className="flex space-y-5">
          <Skeleton className="w-full h-[300px]" />
        </div>
      )}
      <ItemInfo itemId={params.itemId} />
      <div className=" bg-[#F5F5F5] h-4 mb-2 mt-4"></div>
      <ItemDescription itemId={params.itemId} />
      <ReviewContainer itemId={params.itemId} />
      <ItemBottomBar
        itemId={params.itemId}
        itemBasicInfo={basicInfo}
        isCliped={isCliped}
        optionExist={convertedOptionExist}
      />
    </main>
  )
}
