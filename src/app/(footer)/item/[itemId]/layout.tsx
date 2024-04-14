import HeaderWithSearchBar from "@/components/ui/Headers/HeaderWithSearchBar"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderWithSearchBar />
      {children}
    </>
  )
}
