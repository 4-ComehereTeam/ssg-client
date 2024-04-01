import Image from "next/image"

interface QuickMenuItemProp {
  name: string
  path: string
  src: string
}

export default function QuickMenuItemLong({
  name,
  path,
  src,
}: QuickMenuItemProp) {
  return (
    <div className=" text-center text-[13px] mr-[12px] font-[Pretendard-Thin] W-[64px]">
      <a href={path} className="w-[64px] block ">
        <div className="w-[64px]">
          <Image
            alt={name}
            className="rounded-full "
            src={src}
            loading="lazy"
            width={64}
            height={96}
          />
        </div>
        <span>{name}</span>
      </a>
    </div>
  )
}
