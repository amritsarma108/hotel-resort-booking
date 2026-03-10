import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, Users, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to rooms page with search params
    window.location.href = `/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-lobby-4089-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 bg-luxury-gold/20 backdrop-blur-sm rounded-full text-luxury-gold font-medium text-sm">
            Welcome to Himalayan Luxury Stays
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Experience
            <span className="block text-luxury-gold">Paradise</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover the finest luxury accommodations in the heart of the Himalayas
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <form onSubmit={handleSearch} className="glass-card p-4 md:p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full luxury-button flex items-center justify-center gap-2 text-sm"
                  >
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <span className="block text-4xl font-bold text-luxury-gold">15+</span>
              <span className="text-white/80">Years Experience</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-luxury-gold">50K+</span>
              <span className="text-white/80">Happy Guests</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-luxury-gold">120+</span>
              <span className="text-white/80">Luxury Rooms</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

