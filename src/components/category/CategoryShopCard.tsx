import Image from "next/image"

export default function CategoryShopCard({
  shop,
}: {
  shop: { id: number; name: string; desc: string; src: string }
}) {
  return (
    <section className="mb-9">
      <Image
        src={shop.src}
        alt={shop.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "21 / 9",
        }}
      />
      <div>
        <span className="font-bold text-[13px]">{shop.name}</span>
        <p className="text-[11px] text-gray-500">{shop.desc}</p>
      </div>
    </section>
  )
}
