import { useNavigate } from 'react-router'

export const useRouter = () => {
  const navigate = useNavigate()

  return {
    navigate
  }
}
