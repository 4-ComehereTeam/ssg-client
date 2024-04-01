type ItemBrandProps = {
  brand: {
    id: number
    name: string
  }
}

export default function ItemBrand({ brand }: ItemBrandProps) {
  return <div>{brand.name}</div>
}
