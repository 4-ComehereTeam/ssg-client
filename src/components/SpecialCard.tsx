import { getSpecialPriceInfo } from "@/actions/specialPrice/specialPrice"
import SpecialProduct from "./SpecailProduct";

export default async function SpecialCard({itemId} : {itemId : number}){

  console.log("itemId :", itemId);
  const data = await getSpecialPriceInfo(itemId);
  console.log("getSpecialPriceInfo >>", data);


  return(
    <>
      <div>
        <SpecialProduct
          name={data.name}
          brand={""}
          subtitle={""}
          price={data.minPrice}
          id={data.bundleId}
          src={`/SpecialPrice/${data.bundleId}`}
          store={null}
          sale={null}
          salePrice={null}
          reviewRating={0}
          reviewCount={0} 
          imageUrl = {data.imageUrl}
          alt = {data.alt}
          />
      </div>
    </>
  )
}