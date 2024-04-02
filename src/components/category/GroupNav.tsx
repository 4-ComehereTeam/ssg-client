import { largeCategoryType } from "@/types/largeCategoryType"
import Link from "next/link"
import NavItem from "./NavItem"

export default function GroupNav({
  group,
  gx,
  handleOpen,
  isOpen,
}: {
  group: largeCategoryType[]
  gx: number
  handleOpen: React.MouseEventHandler<HTMLLIElement>
  selectedLCategory: number
  isOpen: Boolean
}) {
  return (
    <div className="relative left-0 overflow-hidden w-full ">
      <ul
        className={
          isOpen
            ? "grid grid-cols-5 h-full relative"
            : "grid grid-cols-5 relative"
        }
      >
        {group.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            value={item.id}
            handleOpen={handleOpen}
            gx={gx}
          />
        ))}
      </ul>
      {isOpen && (
        <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 my-[5px] box-border">
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/all"} passHref>
                상품 전체보기
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/1"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/2"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/3"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/4"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/5"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/6"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link href={"/category/7"} passHref>
                중분류명
              </Link>
            </p>
          </li>
          {/* {중분류 데이터.map((item, idx) => {
              return (
                <li key={idx} className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                  <p>
                    <Link
                      href={{
                        pathname: `/category/sub`,
                        query: { lCtg: selectedLCategory, mCtg: item.id }
                      }} // 중분류 페이지로 이동하기 위한 query 설정
                      passHref>
                      중분류명
                    </Link>
                  </p>
                </li>
              )
            })
            } */}
        </ul>
      )}
    </div>
  )
}
