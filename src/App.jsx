import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage.jsx'

/**
 * App — router raíz.
 * Agregar nuevas rutas aquí a medida que crece el producto.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Rutas Futuras */}
    </Routes>
  )
}
