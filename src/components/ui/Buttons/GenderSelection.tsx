"use client"

import { useState } from "react"
import { GenderSelectButton } from "./GenderSelectButton"

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState<string>("")
  const genders = [
    { id: 0, value: "남" },
    { id: 1, value: "여" },
  ]
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender)
  }

  return (
    <div className="flex gap-3">
      {genders.map((gender, index) => (
        <GenderSelectButton
          key={`gender-${index}`}
          genderId={Object.values(genders)[index].id}
          genderValue={Object.values(genders)[index].value}
          selectedGender={selectedGender}
          onChange={handleGenderChange}
        />
      ))}
    </div>
  )
}
