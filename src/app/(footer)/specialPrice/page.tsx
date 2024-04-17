import LargeCategorySlideButton from "@/components/LargeCategorySlideButton"
import SpecailPrice from "@/components/SpecailPrice"
import TabList from "@/components/TabList"
import TopNav from "@/components/main/TopNav"
import HeaderWithSearchBar from "@/components/ui/Headers/HeaderWithSearchBar"

export default function page() {
  const TablistTitles = [
    { title: "전체", subtitle: "보기" },
    { title: "쓱~", subtitle: "특가" },
    { title: "오늘의", subtitle: "장보기" },
  ]

  return (
    <div className="w-full h-100">
      <HeaderWithSearchBar />
      <TopNav index={"특가"} />
      <TabList TablistTitles={TablistTitles} />
      <LargeCategorySlideButton />
      <SpecailPrice />
    </div>
  )
}
