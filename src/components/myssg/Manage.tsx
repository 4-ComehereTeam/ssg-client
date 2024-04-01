import { manageList } from "@/data/myssg"
import Link from "next/link"

export default function Manage() {
  return (
    <section className="p-4">
      {manageList.map((list, index) => (
        <div key={list.id} className="mt-4">
          <h3 className="font-bold mb-3 text-base ">{list.title}</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-500 mb-4">
            {list.items?.map((item, idx) => (
              <li key={idx}>
                <Link href={item.src} className="text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {index !== manageList.length - 1 && <div className=" border"></div>}
        </div>
      ))}
    </section>
  )
}
