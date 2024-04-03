import HeaderToBack from "@/components/ui/Headers/HeaderToBack"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderToBack title="좋아요" />
      {children}
    </>
  )
}
