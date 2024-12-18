import { useRouter } from '@/hooks'
import { useMemoizedFn } from 'ahooks'
import { PAGE } from './const'

export default function App() {
  const { navigate } = useRouter()

  const handleGoPage = useMemoizedFn((path: string) => {
    navigate(path)
  })

  return (
    <div className="flex-center gap-2">
      {PAGE.map(item => (
        <button type="button" onClick={() => handleGoPage(item.path)} key={item.path}>
          {item.name}
        </button>
      ))}
    </div>
  )
}
