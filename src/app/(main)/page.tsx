import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/QuickMenu";
import SearchBar from "@/components/ui/Headers/HeaderWithSearchBar";
import TopNav from "@/components/TopNav";
import AdBox from "@/components/ui/AdBox";
import MainEventSection from "@/components/MainEventSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav />
      <MainEventSection />
      <QuickMenu />
      <AdBox />
      <Footer />
      <BottomNav />
    </>
  );
}
