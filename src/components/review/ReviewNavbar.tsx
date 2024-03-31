import ReviewDropdown from "./ReviewDropdown"
import ReviewFilters from "./ReviewFilters"

export default function ReviewNavbar() {
  return (
    <div className="w-full h-[51.3px] px-5 border-t-[10px] border-zinc-100 border-solid mt-[60px]">
      <div className="border-b-2 border-zinc-100">
        <div className="text-[12px] flex justify-between items-center pt-4 pb-[15px]">
          <ul className="list-none">
            <li className="w-full h-full relative">
              <ReviewDropdown />
            </li>
          </ul>
          <ReviewFilters />
        </div>
      </div>
    </div>
  )
}
