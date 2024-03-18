type CheckboxProps = {
  id: string
  text: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  checkboxShape?: string
}

export default function Checkbox({
  id,
  text,
  onChange,
  checked,
  checkboxShape = "rounded-full",
}: CheckboxProps) {
  return (
    <div className="basis-3/4 flex flex-row gap-2">
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className={`
        appearance-none
        w-[17px] h-[17px]
        border border-gray-300 ${checkboxShape} 
        bg-[url('/assets/images/check.svg')]
        bg-no-repeat
        bg-center
        checked:bg-[#FE5B5B] focus:outline-none
        checked:bg-no-repeat
        checked:bg-center
        checked:bg-[url('/asset/images/check.svg')]
        `}
      />
      <label htmlFor={id} className="basis-3/4">
        {text}
      </label>
    </div>
  )
}
