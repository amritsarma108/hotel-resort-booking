import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { 
      name: 'Pages', 
      dropdown: [
        { name: 'Tourist Info', path: '/tourism' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ]
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-luxury-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center">
              <span className="text-luxury-dark font-display text-xl font-bold">H</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-bold ${isScrolled ? 'text-luxury-dark dark:text-white' : 'text-white'}`}>
                Himalayan
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-white/80'}`}>
                Luxury Stays
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className={`flex items-center space-x-1 font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 dark:text-gray-200 hover:text-luxury-gold' 
                        : 'text-white hover:text-luxury-gold'
                    }`}>
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-white dark:bg-luxury-darkSecondary rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-luxury-gold/10 hover:text-luxury-gold"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 dark:text-gray-200 hover:text-luxury-gold' 
                        : 'text-white hover:text-luxury-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isScrolled 
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200' 
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link
              to="/booking"
              className="hidden md:flex luxury-button text-sm py-3 px-6"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-200' 
                  : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-luxury-darkSecondary shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="space-y-2">
                    <div className={`font-medium ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700'}`}>
                      {link.name}
                    </div>
                    <div className="pl-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 text-gray-600 dark:text-gray-300 hover:text-luxury-gold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block font-medium ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-700'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/booking"
                className="block luxury-button text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

