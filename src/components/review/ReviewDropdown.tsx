"use client"

import Link from "next/link"
import { useState } from "react"
import DropdownMenu from "./DropdownMenu"
import { menus } from "@/data/reviewNav"

export default function ReviewDropdown() {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState("전체")

  const handleMenu = (menuName: string) => {
    setSelectedMenu(menuName)
    setMenuVisible(false)
  }

  return (
    <div>
      <Link
        href="#"
        className="w-full h-full pr-[15px] relative"
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        {selectedMenu}
        <span className="absolute w-4 h-4 bg-sp_product bg-no-repeat bg-[position:-323px_-408px] bg-[length:524px_479px]"></span>
      </Link>
      {isMenuVisible && (
        <ul className="absolute items-center justify-center font-sans">
          {menus.map((menu) => (
            <DropdownMenu
              key={menu.id}
              menuName={menu.name}
              selectedMenu={selectedMenu}
              handleMenu={handleMenu}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
