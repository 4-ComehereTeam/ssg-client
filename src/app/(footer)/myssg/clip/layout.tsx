import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderToBackNotSticky title="좋아요" />
      {children}
    </>
  )
}
