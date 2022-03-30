import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutProvider } from '../hoc/LayoutProvider/Layout'
import { NotFoundPage } from '../pages'
import HomePage from '../pages/HomePage'

const Routing = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  )
}

export default Routing
