import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/QuickMenu";
import SearchBar from "@/components/ui/Headers/HeaderWithSearchBar";
import TopNav from "@/components/TopNav";
import AdBox from "@/components/ui/AdBox";
import Swiper from "@/components/ui/Swiper";
import MainEventSection from "@/components/MainEventSection";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav />
      {/* <Swiper /> */}
      <MainEventSection />
      <QuickMenu />
      <AdBox />
      <BottomNav />
    </>
  );
}
