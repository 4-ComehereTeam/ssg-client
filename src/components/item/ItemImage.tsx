import Image from "next/image"

type ItemImageProps = {
  images: image[]
}

type image = {
  imageId: number
  url: string
  alt: string
  thumbnail: boolean
}

export default function ItemImage({ images }: ItemImageProps) {
  return (
    <section>
      {images.map((image, index) => (
        <div key={image.imageId}>
          <Image src={image.url} alt={image.alt} width={500} height={100} />
        </div>
      ))}
    </section>
  )
}
