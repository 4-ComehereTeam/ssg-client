"use client"

import Link from "next/link"
import { useState } from "react"
import Filter from "./Filter"
import { filters } from "@/data/reviewNav"

export default function ReviewFilters() {
  const [selectedFilter, setSelectedFilter] = useState("")
  const [isFilterVisible, setFilterVisible] = useState(false)

  const handleFilter = (filterName: string) => {
    setSelectedFilter(filterName)
    setFilterVisible(false)
  }

  return (
    <div className="relative">
      <Link
        href="#"
        className="w-full h-full pr-[15px] relative"
        onClick={() => setFilterVisible(!isFilterVisible)}
      >
        {selectedFilter ? selectedFilter : "추천순"}
        <span className="absolute w-4 h-4 bg-sp_product bg-no-repeat bg-[position:-361px_-374px] bg-[length:524px_479px]"></span>
      </Link>
      {isFilterVisible && (
        <ul className="absolute items-center justify-cente right-0 text-zinc-400 font-sans z-20">
          {filters.map((filter) => (
            <Filter
              key={filter.id}
              filterName={filter.name}
              selectedFilter={selectedFilter}
              handleFilter={handleFilter}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
