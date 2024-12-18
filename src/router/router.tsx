import type { RouteProps } from 'react-router'
import Home from '@/pages/home'
import ReRender from '@/pages/reRender'
import { Navigate } from 'react-router'

export const ROUTER = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/reRender',
    element: <ReRender />,
  },
] as RouteProps[]
