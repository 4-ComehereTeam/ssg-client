import QuickMenu from "@/components/main/QuickMenu"
import SearchBar from "@/components/ui/Headers/HeaderWithSearchBar"
import TopNav from "@/components/main/TopNav"
import AdBox from "@/components/main/AdBox"
import MainEventSection from "@/components/main/MainEventSection"
import SpecialPriceSection from "@/components/main/SpecialPriceSection"
import HotItemsSection from "@/components/main/HotItemsSection"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/Skeleton"

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav index={"홈"} />
      <MainEventSection />
      <Suspense fallback={<Skeleton className="w-fit h-fit" />}>
        <QuickMenu />
      </Suspense>
      <AdBox />
      <SpecialPriceSection />
      <HotItemsSection />
    </>
  )
}
