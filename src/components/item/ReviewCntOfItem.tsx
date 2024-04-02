"use server"
import { getItemCalc } from "@/actions/item"

export default async function ReviewCntOfItem({ itemId }: { itemId: string }) {
  const calc = await getItemCalc(itemId)
  return (
    <span className="h-3 text-[10px] text-[#999999]">{calc.reviewCount}</span>
  )
}
