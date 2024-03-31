import React from "react"

type FilterProps = {
  filterName: string
  selectedFilter: string
  handleFilter: (filterName: string) => void
}

export default function Filter({
  filterName,
  selectedFilter,
  handleFilter,
}: FilterProps) {
  return (
    <li
      className={`w-[119px] h-[41.5px] py-[11px] px-[10px] border-b-[0.8px] border-zinc-200 ${
        filterName === selectedFilter
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
      onClick={() => handleFilter(filterName)}
    >
      {filterName}
    </li>
  )
}
