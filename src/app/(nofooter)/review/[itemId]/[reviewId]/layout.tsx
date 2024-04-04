import HeaderOfClose from "@/components/ui/Headers/HeaderOfClose"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderOfClose title="일반 리뷰 상세" />
      {children}
    </>
  )
}
