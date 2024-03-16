import phone from "@/asset/images/phone-certification.png"
import creditcard from "@/asset/images/creditcard-certification.png"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface CertificationMethod {
  imageSrc: StaticImageData
  altText: string
  title: string
}

const CertificationMethods: React.FC = () => {
  const methods: CertificationMethod[] = [
    {
      imageSrc: phone,
      altText: "휴대폰 인증",
      title: "휴대폰 인증",
    },
    {
      imageSrc: creditcard,
      altText: "신용/체크카드 인증",
      title: "신용/체크카드 인증",
    },
  ]

  return (
    <div className="flex gap-2 mx-3 text-sm leading-4 text-black bg-white">
      {methods.map((method, index) => (
        <Link
          href={"#"}
          key={index}
          className="text-center py-5 w-full border border-solid border-slate-300"
        >
          <Image
            src={method.imageSrc}
            alt={method.altText}
            className="relative self-center left-[50%] translate-x-[-50%] bottom-2"
          />
          {method.title}
        </Link>
      ))}
    </div>
  )
}

export default CertificationMethods
