type ItemDescriptionProps = {
  description: string
}

export default function ItemDescription({ description }: ItemDescriptionProps) {
  return <section dangerouslySetInnerHTML={{ __html: description }}></section>
}
