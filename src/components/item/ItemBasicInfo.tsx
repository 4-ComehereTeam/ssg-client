type ItemBasicInfoProps = {
  basicInfo: {
    itemName: string
    itemCode: string
    price: number
    discountRate: number
  }
}

export default function ItemBasicInfo({ basicInfo }: ItemBasicInfoProps) {
  console.log(basicInfo)
  return (
    <section>
      <div>{basicInfo.itemName}</div>
      <div>{basicInfo.itemCode}</div>
      <div>{basicInfo.price}</div>
      <div>{basicInfo.discountRate}</div>
    </section>
  )
}
