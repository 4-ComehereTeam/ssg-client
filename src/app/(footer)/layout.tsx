import Footer from "@/components/Footer"

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>){

    return(
      <>
        {children}
        <Footer />
      </>
    )
    
}