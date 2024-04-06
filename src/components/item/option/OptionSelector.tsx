import Image from "next/image"

type OptionSelectorProps = {
  toggleOptionDetail: () => void
  selectedOption: string
}

export default function OptionSelector({
  toggleOptionDetail,
  selectedOption,
}: OptionSelectorProps) {
  return (
    <div onClick={toggleOptionDetail} className="px-4">
      <div className="flex items-center justify-between pl-4 border border-solid rounded-sm h-[40px] w-full">
        <span>{selectedOption}</span>
        <span className="px-4">
          <Image
            width="0"
            height="0"
            src="https://img.icons8.com/ios/100/back--v1.png"
            alt="상세 옵션 열기"
            style={{
              transform: "rotate(-90deg)",
              width: "16px",
              height: "16px",
            }}
          />
        </span>
      </div>
    </div>
  )
}
