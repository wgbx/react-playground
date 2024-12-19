import type { RouteProps } from 'react-router'
import ComplexForm from '@/pages/complexForm'
import Form from '@/pages/form'
import Home from '@/pages/home'
import ReRender from '@/pages/reRender'
import { Navigate } from 'react-router'

export const ROUTER: RouteProps[] = [
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
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '/complexForm',
    element: <ComplexForm />,
  },
]
