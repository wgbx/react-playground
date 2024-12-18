import { BrowserRouter, Route, Routes } from 'react-router'
import { ROUTER } from './router'

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
