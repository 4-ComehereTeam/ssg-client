import { getItemBasicInfo, getItemDescription } from "@/actions/item"
import { ItemIdType } from "./ItemInfo"
import Image from "next/image"
import Link from "next/link"
import Description from "./Description"

export default async function ItemDescription({ itemId }: ItemIdType) {
  const description = await getItemDescription(itemId)
  const basicInfo = await getItemBasicInfo(itemId)
  console.log(basicInfo)
  return (
    <section className="px-4 my-4">
      <div>
        <h3 className="text-xl mb-3 border-b-[1px] border-[#777777]">
          <span>상세정보</span>
        </h3>
        <div className="text-xs text-[#777777]">
          <span>상품번호: </span>
          <span>{basicInfo.itemCode}</span>
        </div>
        <div className="py-5 flex flex-row justify-between border-b-[1px]">
          <div className="flex flex-row w-full">
            <div className="mr-2 rounded-full border border-solid w-[40px] h-[40px] flex justify-center items-center">
              <Image
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/siren.png"
                alt="siren"
              />
            </div>
            <p className="flex items-center text-[13px] basis-1/2">
              상품정보에
              <br />
              문제가 있나요?
            </p>
          </div>
          <Link
            href={"#"}
            className="rounded-full border border-solid h-[41px] w-[100px] text-center text-[13px] flex justify-center items-center"
          >
            신고하기
          </Link>
        </div>
      </div>
      <Description description={description} />
    </section>
  )
}
