import Image from "next/image";

interface QuickMenuItemProp {
    name : string,
    path : string,
    src : string
}

const lineBreak = (text: string) => {
    return (
        <span dangerouslySetInnerHTML={{ __html: text.replace(/ /g, '<br />') }} />
    );
}

export default function QuickMenuItem({name, path, src}:QuickMenuItemProp){
    return(
        <>
            <div className=" text-center text-xs mr-[12px] font-[Pretendard-Thin] w-[64px]">
                <a  href={path} className="w-[64px] block ">
                    <div className="w-[64px]">
                        <Image alt={name} className="rounded-full " src={src} loading="lazy" width={64} height={64}/>
                    </div>
                    <span>{lineBreak(name)}</span>
                </a>
            </div>
        </>
    )
}