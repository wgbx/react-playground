import { memo } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  style?: React.CSSProperties
}

function Button(props: ButtonProps) {
  const { children, onClick, style } = props
  console.info('Button 渲染')

  return (
    <div>
      <button onClick={onClick} style={style}>
        {children}
      </button>
      <div className="mt-2">{new Date().getTime()}</div>
    </div>
  )
}

export default memo(Button)
