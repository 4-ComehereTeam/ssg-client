import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/main/QuickMenu";
import SearchBar from "@/components/ui/Headers/HeaderWithSearchBar";
import TopNav from "@/components/main/TopNav";
import AdBox from "@/components/main/AdBox";
import MainEventSection from "@/components/main/MainEventSection";
import Footer from "@/components/Footer";
import SpecailPrice from "@/components/SpecailPrice";
import SpecialPriceSection from "@/components/main/SpecialPriceSection";
import HotItemsSection from "@/components/main/HotItemsSection";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav index={"홈"}/>
      <MainEventSection />
      <QuickMenu />
      <AdBox />
      <SpecialPriceSection />
      <HotItemsSection />
      <Footer />
      <BottomNav />
    </>
  );
}
