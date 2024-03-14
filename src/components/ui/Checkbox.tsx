type CheckboxProps = {
  id: string
}

export default function Checkbox({ id }: CheckboxProps) {
  return (
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
  )
}
