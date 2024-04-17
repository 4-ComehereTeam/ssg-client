import { deleteManyClips } from "@/actions/clip/itemClip"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/shadcnUI/alert-dialog"

type EditBarProps = {
  clickItemIds: number[]
}

export default function EditBar({ clickItemIds }: EditBarProps) {
  const handleDeleteButton = async () => {
    await deleteManyClips(clickItemIds)
  }
  return (
    <div className="z-10 right-0 fixed bottom-0 w-full h-12 text-white tracking-tighter">
      <AlertDialog>
        <AlertDialogTrigger className="bg-[#FF5452] size-full">
          삭제
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              정말 삭제하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-[#FF5452] text-white"
              onClick={handleDeleteButton}
            >
              확인
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
