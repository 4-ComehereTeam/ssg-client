type ItemCalcProps = {
  calc: {
    reviewCount: number
    averageStar: number
  }
}

export default function ItemCalc({ calc }: ItemCalcProps) {
  return (
    <section>
      <div>{calc.reviewCount}</div>
      <div>{calc.averageStar}</div>
    </section>
  )
}
