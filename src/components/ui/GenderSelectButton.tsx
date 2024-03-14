interface GenderSelectButtonProps {
  gender: string
  selectedGender: string
  onChange: (gender: string) => void
}

export const GenderSelectButton: React.FC<GenderSelectButtonProps> = ({
  gender,
  selectedGender,
  onChange,
}) => {
  const isSelected = selectedGender === gender
  return (
    <label
      className={`flex justify-center items-center px-3 py-1.5 border border-solid rounded-[100px] ${
        isSelected ? "bg-black text-white" : "border-zinc-500 text-black"
      }`}
    >
      <input
        type="radio"
        name="gender"
        value={gender}
        onChange={() => onChange(gender)}
        checked={isSelected}
        className="sr-only"
      />
      <span>{gender}</span>
    </label>
  )
}
