import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'

export default function App() {
  const [count, setCount] = useState(0)
  const [button, setButton] = useState(0)


  const handleClickButton = useCallback(() => {
    setButton((button) => button + 1)
  }, [])

  const buttonContent = useMemo(() => {
    return `button is ${button}`
  }, [button])

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Count onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Count>
      <Button onClick={handleClickButton}>
        {buttonContent}
      </Button>
    </div>
  )
}

