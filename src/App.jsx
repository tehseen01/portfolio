import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Home, Work, About, Contact, Navbar } from './components/import'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
