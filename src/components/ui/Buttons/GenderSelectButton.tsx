interface GenderSelectButtonProps {
  genderId: number
  genderValue: string
  selectedGender: string
  onChange: (gender: string) => void
}

export function GenderSelectButton({
  genderId,
  genderValue,
  selectedGender,
  onChange,
}: GenderSelectButtonProps) {
  const isSelected = selectedGender === genderValue
  return (
    <label
      className={`flex justify-center items-center px-3 py-1.5 border border-solid rounded-full ${
        isSelected ? "bg-black text-white" : "border-zinc-500 text-black"
      }`}
    >
      <input
        type="radio"
        name="gender"
        value={genderId}
        onChange={() => onChange(genderValue)}
        checked={isSelected}
        className="sr-only"
      />
      <span>{genderValue}</span>
    </label>
  )
}
