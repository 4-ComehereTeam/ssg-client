import Checkbox from "./Checkbox"

interface AgreementProps {
  num: number
  agreementText: string
  checked: boolean
  onChange: (position: number) => void
  onClick: () => void
}

export default function Agreement({
  num,
  agreementText,
  checked,
  onChange,
  onClick,
}: AgreementProps) {
  return (
    <div className="flex justify-between items-start px-4 py-3.5 w-full whitespace-nowrap bg-white border-t border-solid text-zinc-600">
      <div className="flex gap-1">
        <input
          id={num.toString()}
          type="checkbox"
          checked={checked}
          onChange={() => onChange(num)}
          onClick={num === 4 ? onClick : undefined}
          className="
        appearance-none
        w-[17px] h-[17px]
        border border-gray-300 rounded-full 
        bg-[url('/assets/images/check.svg')]
        bg-no-repeat
        bg-center
        checked:bg-[#FE5B5B] focus:outline-none
        checked:bg-no-repeat
        checked:bg-center
        checked:bg-[url('/asset/images/check.svg')]
        "
        />
        <label htmlFor={num.toString()}>{agreementText}</label>
      </div>
      <button className="bg-[#F8F8F8] border border-slate-400 w-[50px] h-[17px] text-xs">
        내용보기
      </button>
    </div>
  )
}
