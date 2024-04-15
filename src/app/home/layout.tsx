import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"

export default function Layout({
  children,
  hotItems,
}: Readonly<{
  children: React.ReactNode
  hotItems: React.ReactNode
}>) {
  return (
    <>
      {children}
      {hotItems}
      <Footer />
      <BottomNav />
    </>
  )
}
