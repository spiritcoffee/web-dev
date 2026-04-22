import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Download from './pages/Download'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  )
}
