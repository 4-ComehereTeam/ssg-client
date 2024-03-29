import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"
import AuthProviders from "@/components/AuthProviders"

export const metadata: Metadata = {
  title: "믿고 사는 즐거움 SSG.COM",
  description: "믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProviders>
          {children}
          <Footer />
        </AuthProviders>
      </body>
    </html>
  )
}
