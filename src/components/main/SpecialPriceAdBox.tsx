import Image from "next/image";
import Link from "next/link";

export default function SpecialPriceAdBox(){
  return(
    <Link href={"/specialPrice"} className="w-full px-4 flex relative top-2">
      <Image alt="쓱특가 강력추천" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0" width={450} height={400}/>
    </Link>
  )
}