import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Error from './pages/Error.jsx'
import LocationSheets from './pages/locationsheets.jsx'
import { Header } from './components/Header/Header.jsx'
import  { Footer } from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LocationSheets/:id" element={<LocationSheets />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>,
)

