import Home from "@/asset/images/home.svg"
import Image from "next/image"
import Link from "next/link"

export default function HeaderOfCart({ title }: { title: string }) {
  return (
    <header className="h-[45px] flex items-center border-b-[1px] border-[rgba(0, 0, 0, 0.07)] sticky top-0 shadow-md bg-white z-50">
      <Link
        className="w-[50px] h-full items-center flex justify-center"
        href={"#"}
      >
        <Image
          width="24"
          height="22"
          className="mx-auto"
          src="https://img.icons8.com/ios/50/left--v1.png"
          alt="backButton"
        />
      </Link>
      <h3 className="text-[14px] w-full text-center mx-auto relative left-[10px]">
        {title}
      </h3>
      <Link
        className="w-[50px] h-full items-center flex justify-center"
        href={"#"}
      >
        <Image
          width="27"
          height="27"
          className="mx-auto"
          src="https://img.icons8.com/ios/27/search--v1.png"
          alt="searchIcon"
        />
      </Link>
      <Link
        className="w-[50px] h-full items-center flex justify-center"
        href={"#"}
      >
        <Image
          width="24"
          height="22"
          className="mx-auto"
          src={Home}
          alt="backButton"
        />
      </Link>
    </header>
  )
}
