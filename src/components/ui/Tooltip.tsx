type TootipPropsType = {
  text: string
  className?: string
  children?: React.ReactNode
}

export default function Tooltip({
  text,
  className,
  children,
}: TootipPropsType) {
  return (
    <div
      className={`absolute top-[100%] w-[120%] h-[210%] bg-[rgba(0,0,0,0.9)] text-white ${className}`}
    >
      <button className="absolute right-2 text-lg">X</button>
      <div className="absolute top-6 px-2.5 mt-1">• {text}</div>
      {children}
    </div>
  )
}
