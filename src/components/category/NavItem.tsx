import Image from "next/image"
import { largeCategoryType } from "@/types/largeCategoryType"

export default function NavItem({
  item,
  value,
  handleOpen,
  gx,
}: {
  item: largeCategoryType
  value: largeCategoryType["id"]
  handleOpen: React.MouseEventHandler<HTMLLIElement>
  gx: number
}) {
  return (
    <li
      className="relative flex flex-col justify-center items-center"
      onClick={handleOpen}
      role={gx.toString()}
      value={value}
    >
      <Image
        src={item.img_url}
        alt={item.title}
        width={64}
        height={64}
        priority={true}
      />
      <p className="text-[10px] text-gray-500">{item.title}</p>
    </li>
  )
}
