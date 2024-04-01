type DropdownMenuProps = {
  menuName: string
  selectedMenu: string
  handleMenu: (menuName: string) => void
}

export default function DropdownMenu({
  menuName,
  selectedMenu,
  handleMenu,
}: DropdownMenuProps) {
  return (
    <li
      className={`w-[119px] h-[41.5px] py-[11px] px-[10px] ${
        menuName === selectedMenu
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
      onClick={() => handleMenu(menuName)}
    >
      {menuName}
    </li>
  )
}
