import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/QuickMenu";
import SearchBar from "@/components/SearchBar";
import TopNav from "@/components/TopNav";
import AdBox from "@/components/ui/AdBox";
import Swiper from "@/components/ui/Swiper";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav />
      <Swiper />
      <QuickMenu />
      <AdBox />
      <BottomNav />
    </>
  );
}
