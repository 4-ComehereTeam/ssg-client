import { getCategoryItemsCount } from "@/actions/category/categoryItems"
import ResignButton from "@/components/ResignButton"
import { getSession } from "@/lib/getSession"

export default async function ResignPage() {
  const session = await getSession()
  const result = await getCategoryItemsCount(null, null, null)
  return (
    <main className="h-[100vh] flex flex-col gap-4 justify-center items-center">
      <h1>떠나신다니 아쉬워요</h1>
      {result && (
        <div>
          <p className="text-sm">
            <span className="font-bold text-md">{result.count}</span>
            개의 상품이 <span>{session?.user.name}</span>님을 기다리고 있어요
          </p>
        </div>
      )}
      <ResignButton />
    </main>
  )
}