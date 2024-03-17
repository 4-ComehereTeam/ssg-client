type CheckboxProps = {
  id: string
  text: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

export default function Checkbox({
  id,
  text,
  onChange,
  checked,
}: CheckboxProps) {
  return (
    <div className="flex gap-2 items-center">
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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
      <label htmlFor={id}>{text}</label>
    </div>
  )
}
