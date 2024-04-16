import HeaderOfMyssg from "@/components/ui/Headers/HeaderOfMyssg"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MY SSG, 믿고 사는 즐거움 SSG.COM",
  description: "MY SSG, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderOfMyssg />
      {children}
    </>
  )
}
