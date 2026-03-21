interface BotãoProps {
  children: React.ReactNode
  className?: string
}

export default function Botão({ children, className }: BotãoProps) {
  return (
    <button className={`rounded-[10px] ${className}`}>
      {children}
    </button>
  )
}