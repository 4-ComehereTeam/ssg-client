import ItemCard from "./ItemCard"

type ClipItemsType = {
  id: number
}[]

type ClipItemsPropsType = {
  clipItems: ClipItemsType
}

export default function ClipItems({ clipItems }: ClipItemsPropsType) {
  return (
    <section className="flex flex-row gap-1 flex-wrap justify-center">
      {clipItems.map((item) => (
        <div key={item.id}>
          <ItemCard />
        </div>
      ))}
    </section>
  )
}
