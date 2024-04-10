import { getSpecialPrice } from "@/actions/specialPrice/specialPrice";
import SpecailPrice from "../SpecailPrice";
import SpecialPriceAdBox from "./SpecialPriceAdBox";
import SpecialCard from "../SpecialCard";
import { cookies } from "next/headers";

export default async function SpecialPriceSection(){

  const data = await getSpecialPrice();
  console.log("SpecialPriceSection.getSpecialPrice() >>", data.bundles);

  return(
    <section className="mt-14">
      <h1 className="mx-4 font-bold text-[18px]">가장 인기 있는 특가 상품이에요!</h1>
      <SpecialPriceAdBox/>
      {data.bundles.map((item : number, index : number) => (
        <SpecialCard itemId={item} key={index}/>
      ))}
    </section>
  )
}