import { Navigate, RouteProps } from 'react-router'
import Home from '@/pages/home'
import ReRender from '@/pages/reRender'

export const ROUTER = [
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/reRender',
    element: <ReRender />
  }
] as RouteProps[]
