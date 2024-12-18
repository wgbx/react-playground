import { Navigate, BrowserRouter, Routes, Route, RouteProps } from 'react-router'
import Home from '@/pages/home'

const ROUTER = [
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <Home />
  }
] as RouteProps[]

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTER.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
