import { Skeleton } from "./Skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 py-2">
      <Skeleton className="h-[120px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}
