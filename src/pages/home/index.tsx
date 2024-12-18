import { useRouter } from '@/hooks'
import { useMemoizedFn } from 'ahooks'
import { PAGE } from './const'

export default function App() {
  const { navigate } = useRouter()

  const handleGoPage = useMemoizedFn((path: string) => {
    navigate(path)
  })

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {PAGE.map(item => (
        <button onClick={() => handleGoPage(item.path)} key={item.path}>
          {item.name}
        </button>
      ))}
    </div>
  )
}
