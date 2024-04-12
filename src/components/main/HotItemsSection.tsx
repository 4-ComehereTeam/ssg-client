import Link from "next/link";
import SubCategorySlideButton from "../category/SubCategorySlideButton";
import MainSlideButton from "./MainSlideButton";
import PopularProduct from "../category/PopularProduct";
import { getItemList } from "@/actions/item";

export default async function HotItemsSection(){

  const data = await getItemList();
  console.log("getItemList >>>", data.itemIds);

  return(
    <section className="">
      <div className="flex justify-between px-4">
        <h1 className="text-[18px] font-bold ">지금 인기있는 상품이에요</h1>
        <Link href={"#"} className="text-xs">
          전체보기 {">"}
        </Link>
      </div>
      <MainSlideButton/>
      <div className="grid-cols-custom grid gap-y-0 gap-x-1 ms-4 me-4">
        {
          data.itemIds.map((item : number, index : number) => (
            <PopularProduct 
              key={item}
              id={item}
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
          ))
        }
      </div>
    </section>
  )
}