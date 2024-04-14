import { getItemBrand } from "@/actions/item"
import Image from "next/image"
import Link from "next/link"
import { ItemIdType } from "./ItemInfo"

export default async function ItemBrand({ itemId }: ItemIdType) {
  const brand = await getItemBrand(itemId)
  if (brand) {
    return (
      <div className="w-full mb-2">
        <Link href={"#"} className="flex flex-row w-[27%] items-center">
          <span className="text-xs text-center font-extrabold">
            {brand.name}
          </span>
          <Image
            width="17"
            height="17"
            src="https://img.icons8.com/material-rounded/24/back--v1.png"
            alt="브랜드"
            style={{ transform: "rotate(180deg)" }}
          />
        </Link>
      </div>
    )
  }
}
