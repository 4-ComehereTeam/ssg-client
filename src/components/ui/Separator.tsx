interface SeparatorProps {
  className?: string
  height?: string
}

export default function Separator({ className, height = "3" }: SeparatorProps) {
  return <div className={`shrink-0 h-${height} bg-gray-400 ${className}`} />
}
