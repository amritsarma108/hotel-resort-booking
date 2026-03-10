import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Rooms from './pages/Rooms/Rooms'
import RoomDetails from './pages/RoomDetails/RoomDetails'
import Booking from './pages/Booking/Booking'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Tourism from './pages/Tourism/Tourism'
import Blog from './pages/Blog/Blog'
import SpaWellness from './pages/SpaWellness'
import FineDining from './pages/FineDining'
import AdventureTours from './pages/AdventureTours'
import WeddingEvents from './pages/WeddingEvents'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-luxury-cream dark:bg-luxury-dark transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:roomId" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/spa-wellness" element={<SpaWellness />} />
            <Route path="/fine-dining" element={<FineDining />} />
            <Route path="/adventure-tours" element={<AdventureTours />} />
            <Route path="/wedding-events" element={<WeddingEvents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

