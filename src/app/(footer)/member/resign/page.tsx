import { getCategoryItemsCount } from "@/actions/category/categoryItems"
import ResignButton from "@/components/ResignButton"
import Counter from "@/components/ui/Counter"
import { getSession } from "@/lib/getSession"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MY SSG, 믿고 사는 즐거움 SSG.COM",
  description: "MY SSG, 믿고 사는 즐거움 SSG.COM",
  icons: {
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/favicon/ssg/icon_72x72.png?q=f323cd4fb4bb4db63ae1e7055690d6316ba74006",
  },
}

export default async function ResignPage() {
  const session = await getSession()
  const result = await getCategoryItemsCount(null, null, null)
  return (
    <main className="h-[100vh] flex flex-col gap-4 justify-center items-center">
      <h1>떠나신다니 아쉬워요</h1>
      {result && (
        <div>
          <p className="text-sm">
            <Counter targetNumber={result.count} />
            개의 상품이 <span>{session?.user.name}</span>님을 기다리고 있어요
          </p>
        </div>
      )}
      <ResignButton />
    </main>
  )
}
