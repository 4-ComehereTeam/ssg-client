import { ClipCategoryIds, deleteClipCategories } from "@/actions/categoryClip"

export default function CategoryEditBar({
  clickCategoryIds,
}: {
  clickCategoryIds: ClipCategoryIds
}) {
  //체크박스 클릭한 상품들 삭제 요청
  const handleDeleteButton = async () => {
    await deleteClipCategories(clickCategoryIds)
    //모달로 바꿀 예정
    let confirm = window.confirm("정말 삭제하시겠습니까?")
    confirm && alert("삭제되었습니다.")
  }
  return (
    <div className="z-10 right-0 fixed bottom-0 w-full h-12 text-white tracking-tighter">
      <button className="bg-[#FF5452] size-full" onClick={handleDeleteButton}>
        삭제
      </button>
    </div>
  )
}
