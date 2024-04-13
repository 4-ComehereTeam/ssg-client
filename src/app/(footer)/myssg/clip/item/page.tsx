import { getClipItemIds } from "@/actions/itemClip"
import ClipMain from "@/components/clip/item/ClipMain"

export default async function ClipItemsPage() {
  const itemIds = await getClipItemIds()

  return <ClipMain itemIds={itemIds} />
}
