interface SeparatorProps {
  className?: string
}

export default function Separator({ className }: SeparatorProps) {
  return <div className={`shrink-0 w-px h-3 bg-gray-400 ${className}`} />
}
