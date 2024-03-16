type CheckboxProps = {
  id: string
  text: string
}

export default function Checkbox({ id, text }: CheckboxProps) {
  return (
    <div className="flex gap-1">
      <input
        id={id}
        type="checkbox"
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
