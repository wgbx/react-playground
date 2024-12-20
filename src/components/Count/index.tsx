interface CountProps {
  children: React.ReactNode
  onClick: () => void
  style?: React.CSSProperties
}

export default function Count(props: CountProps) {
  const { children, onClick, style } = props
  console.info('Count 渲染')

  return (
    <div>
      <button onClick={onClick} style={style}>
        {children}
      </button>
      <div className="mt-2">{new Date().getTime()}</div>
    </div>
  )
}
