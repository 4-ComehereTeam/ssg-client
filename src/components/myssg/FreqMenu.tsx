import { freqMenuIcon } from "@/data/myssg"
import Image from "next/image"

function Menu() {
  return (
    <section className="p-4">
      <p className="font-extrabold text-base">자주찾는 메뉴</p>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-y-3 gap-x-2 mb-10 mt-2 text-[12px]">
        {freqMenuIcon.map((icon) => (
          <div key={icon.id}>
            <Image
              src={icon.src}
              alt={icon.alt}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={61}
              height={61}
            />
            <p className="text-center">{icon.alt}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center border py-2 rounded-xl text-[11px]">
        <p className="flex-1 text-center ">고객센터</p>
        <p className="text-gray-200 text-sm">|</p>
        <p className="flex-1 text-center">e-mail 상담/답변</p>
      </div>
    </section>
  )
}

export default Menu
