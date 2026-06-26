import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Direction01 from './pages/Direction01'
import Direction02 from './pages/Direction02'
import Direction03 from './pages/Direction03'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/direction-01" element={<Direction01 />} />
      <Route path="/direction-02" element={<Direction02 />} />
      <Route path="/direction-03" element={<Direction03 />} />
    </Routes>
  )
}
