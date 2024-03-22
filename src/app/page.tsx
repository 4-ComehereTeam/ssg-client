import BottomNav from "@/components/BottomNav";
import QuickMenu from "@/components/QuickMenu";
import SearchBar from "@/components/SearchBar";
import TopNav from "@/components/TopNav";
import AddBox from "@/components/ui/AdBox";

export default function Home() {
  return (
    <>
      <SearchBar />
      <TopNav />
      <QuickMenu />
      <AddBox />
      <BottomNav />
    </>
  );
}
