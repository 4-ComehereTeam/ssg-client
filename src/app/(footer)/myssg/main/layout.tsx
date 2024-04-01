import HeaderOfMyssg from "@/components/ui/Headers/HeaderOfMyssg"

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
