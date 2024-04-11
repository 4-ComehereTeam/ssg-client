import React from 'react'
import SpecialProduct from '@/components/SpecailProduct'
import { getSpecialPrice } from '@/actions/specialPrice/specialPrice'
import SpecialCard from './SpecialCard';

export default async function SpecailPrice() {

  const data = await getSpecialPrice();
  console.log("SpecailPrice.getSpecialPrice() >>", data.bundles);

  return (
    <div>
      {data.bundles.map((item : number, index : number) => (
        <SpecialCard itemId={item} key={index} />
      ))}
    </div>
  )

}
