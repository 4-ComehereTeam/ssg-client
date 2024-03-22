import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/QuickMenu";
import SearchBar from "@/components/SearchBar";
import TopNav from "@/components/TopNav";
import AdBox from "@/components/ui/AdBox";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav />
      <QuickMenu />
      <AdBox />
      <BottomNav />
    </>
  );
}
