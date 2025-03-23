import './App.css'
import { Routes, Route } from 'react-router-dom'
import Resume from './pages/resume/resume'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projects from './pages/portfolio/Projects'
import Layout from './components/layout/Layout'

function App() {
  return (
               
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />    
            </Route>  
          </Routes>
     
    
  );
}

export default App
