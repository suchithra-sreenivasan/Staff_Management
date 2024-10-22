import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
