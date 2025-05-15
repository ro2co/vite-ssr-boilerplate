import { Routes, Route } from 'react-router-dom'

import { About, Home } from './pages'

import Error from './components/Error/Error'

export const Router = ({ location }: { location: string }) => {
  return (
    <Routes location={location}>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}