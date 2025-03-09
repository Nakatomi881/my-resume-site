import './App.css'
import { Routes, Route } from 'react-router-dom'
import Resume from './pages/resume/resume'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
