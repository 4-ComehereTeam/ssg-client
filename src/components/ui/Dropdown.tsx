"use client"

import { useState } from "react"

interface DropdownOption {
  label: string
  value: string
}

type DropdownPropsType = {
  options: DropdownOption[]
  style: string
}

export const Dropdown = ({ options, style }: DropdownPropsType) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0],
  )

  return (
    <select
      className={style}
      value={selectedOption.value}
      onChange={(e) =>
        setSelectedOption(
          options.find((option) => option.value === e.target.value) ||
            options[0],
        )
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
