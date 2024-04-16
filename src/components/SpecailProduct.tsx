import { ProductDataType } from "@/types/productDataType"
import Image from "next/image"
import Link from "next/link"

export default async function SpecialProduct({
  id,
  src,
  brand,
  name,
  subtitle,
  price,
  imageUrl,
  alt,
}: ProductDataType) {
  const addCommas = (number: number) => {
    let result = ""
    let numberToString = number.toString()
    var len = numberToString.length
    for (var i = len - 1; i >= 0; i--) {
      result = numberToString.charAt(i) + result
      if ((len - i) % 3 === 0 && i !== 0) {
        result = "," + result
      }
    }
    return result
  }

  return (
    <div className="static pt-[0.625rem] pb-5 mx-4 my-2.5">
      <div className="static">
        <Link href={src}>
          <div className="relative">
            <div className=" justify-center items-center ">
              <div className="aspect-video">
                <Image
                  className="object-contain"
                  src={imageUrl}
                  alt={alt}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  width={0}
                  height={0}
                  priority
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" flex justify-between items-center pt-[0.125rem]">
        <p className="text-ellipsis line-clamp-2 text-sm">
          <span className="font-bold mr-1">{brand}</span>
          {name}
        </p>
      </div>
      <p className="text-ellipsis line-clamp-2 text-sm">{subtitle}</p>
      <span className="font-bold">{addCommas(price)}원~</span>
      <a className="block mt-[0.625rem] pr-[1.25rem]"></a>
    </div>
  )
}
