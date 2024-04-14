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

  const lineBreak = (text: string) => {
    return (
      <span dangerouslySetInnerHTML={{ __html: text.replace(/ /g, "<br />") }} />
    )
  }

  return (
    <div className=" text-center text-[13px] mr-[12px] font-[Pretendard-Light] W-[64px]">
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
        <span>{lineBreak(name)}</span>
      </a>
    </div>
  )
}
