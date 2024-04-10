import Link from "next/link";
import SubCategorySlideButton from "../category/SubCategorySlideButton";
import MainSlideButton from "./MainSlideButton";

export default function HotItemsSection(){

  return(
    <section className="px-4">
      <div className="flex justify-between">
        <h1 className="text-[18px] font-bold">지금 인기있는 상품이에요</h1>
        <Link href={"#"} className="text-xs">
          전체보기 {">"}
        </Link>
      </div>
      <MainSlideButton/>
    </section>
  )
}