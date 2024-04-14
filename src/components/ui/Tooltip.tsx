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
    <div className={`${className}`}>
      <div className="top-1 px-2.5 mt-1">• {text}</div>
      {children}
    </div>
  )
}
