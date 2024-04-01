type PointTagProps = {
  tagName: string
  width: string
  backgroundColor: string
}

export default function PointTag({
  tagName,
  width,
  backgroundColor,
}: PointTagProps) {
  return (
    <p
      className={`flex justify-center items-center py-0.5 h-5 rounded font-bold text-white text-xs ${width} ${backgroundColor}`}
    >
      {tagName}
    </p>
  )
}
