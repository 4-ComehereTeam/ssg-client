import { Categories } from "@/actions/category/category"
import Link from "next/link"

export default function SubCategoryDrawer({
  bigCtgId,
  midCtgId,
  existingSmall,
  isOpenAllCategory,
  selectedIndex,
  handleDrawer,
  subCategories,
}: {
  bigCtgId: number
  midCtgId: number
  existingSmall: boolean
  isOpenAllCategory: boolean
  selectedIndex: number
  handleDrawer: (index: number) => void
  subCategories: Categories
}) {
  return (
    <div
      className={`fixed h-[100vw] bottom-[40%] w-full ${
        isOpenAllCategory ? "z-20 bg-[#383838c7] animate-fade-in" : "z-[-10]"
      }`}
      onClick={() => handleDrawer(selectedIndex)}
    >
      <div
        id="drawer"
        className={`fixed z-20 bg-white bottom-0 w-full h-[60%] rounded-t-[20px] transform ${
          isOpenAllCategory ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col items-center border-b-[1px]">
          <div className="w-[40px] h-[4px] mt-2 bg-[#e5e5e5] rounded-sm"></div>
          <h3 className="h-10 text-center pt-2 font-bold">전체 카테고리</h3>
        </div>
        <div className="overflow-y-scroll">
          <ul className="flex flex-col px-5 py-3 text-sm">
            {subCategories.map((subCtg, index) => (
              <Link
                key={subCtg.id}
                className="w-full h-[44px] flex flex-row gap-2 items-center"
                href={
                  existingSmall
                    ? `/category-items?big=${bigCtgId}&mid=${midCtgId}&small=${subCtg.id}`
                    : `/category-items?big=${bigCtgId}&mid=${subCtg.id}`
                }
                onClick={() => handleDrawer(index)}
              >
                <input
                  type="radio"
                  onChange={() => handleDrawer(index)}
                  checked={selectedIndex === index}
                  className={`w-[20px] h-[20px] rounded-full appearance-none border border-gray-400 ${
                    selectedIndex === index
                      ? "bg-[#FE5B5B] ring-offset-4 ring-[#FE5B5B]"
                      : "bg-white"
                  }`}
                />
                {subCtg.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
