import Link from "next/link";
import SubCategorySlideButton from "../category/SubCategorySlideButton";
import MainSlideButton from "./MainSlideButton";
import PopularProduct from "../category/PopularProduct";
import { getItemList } from "@/actions/item";

export default function HotItemsSection(){

  console.log("getItemList >>>", getItemList());

  return(
    <section className="px-4">
      <div className="flex justify-between">
        <h1 className="text-[18px] font-bold">지금 인기있는 상품이에요</h1>
        <Link href={"#"} className="text-xs">
          전체보기 {">"}
        </Link>
      </div>
      <MainSlideButton/>
      <PopularProduct 
        key={"item.id"}
        id={0}
        src={""}
        store={"item.store"}
        brand={"item.brand"}
        name={"item.name"}
        subtitle={"item.subtitle"}
        price={0}
        sale={0}
        salePrice={0}
        reviewRating={0}
        reviewCount={0}         
        imageUrl={""}
        alt={""}
      />
    </section>
  )
}