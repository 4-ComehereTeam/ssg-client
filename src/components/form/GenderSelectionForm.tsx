"use client"

import { useState } from "react"
import { GenderSelectButton } from "../ui/GenderSelectButton"

const GenderSelectionForm: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>("")
  const genders = ["남", "여"]
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender)
  }
  return (
    <div className="flex flex-col gap-5 justify-center items-center px-3 bg-white border-t border-solid border-zinc-100 max-w-[360px]">
      <div className="flex gap-3">
        {genders.map((gender) => (
          <GenderSelectButton
            key={gender}
            gender={gender}
            selectedGender={selectedGender}
            onChange={handleGenderChange}
          />
        ))}
      </div>
    </div>
  )
}

export default GenderSelectionForm
