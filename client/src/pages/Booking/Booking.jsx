import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BookingForm from '../../components/BookingForm/BookingForm'

const Booking = () => {
  const { roomId } = useParams()
  const [selectedRoom, setSelectedRoom] = useState(null)

  const rooms = [
    { id: 1, name: 'Deluxe Lake View Room', price: 250, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80' },
    { id: 2, name: 'Executive Suite', price: 400, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80' },
    { id: 3, name: 'Presidential Suite', price: 800, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80' },
    { id: 4, name: 'Standard Garden Room', price: 150, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80' },
    { id: 5, name: 'Family Suite', price: 350, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&q=80' },
    { id: 6, name: 'Honeymoon Suite', price: 500, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80' }
  ]

  useEffect(() => {
    if (roomId) {
      const room = rooms.find(r => r.id === parseInt(roomId))
      if (room) setSelectedRoom(room)
    }
  }, [roomId])

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark dark:text-white mb-4">
            Book Your Stay
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Complete your reservation and look forward to an unforgettable experience at Himalayan Luxury Stays
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <BookingForm room={selectedRoom} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Selected Room */}
            {selectedRoom && (
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                  Selected Room
                </h3>
                <div className="flex gap-4">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white">
                      {selectedRoom.name}
                    </h4>
                    <p className="text-luxury-gold font-bold">${selectedRoom.price}/night</p>
                  </div>
                </div>
              </div>
            )}

            {/* Hotel Policy */}
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                Hotel Policy
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-luxury-gold">•</span>
                  Check-in: 2:00 PM - Check-out: 12:00 PM
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-gold">•</span>
                  Free cancellation up to 24 hours before check-in
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-gold">•</span>
                  Pets are not allowed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-gold">•</span>
                  Children welcome (extra bed available)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-gold">•</span>
                  Credit card required for booking
                </li>
              </ul>
            </div>

            {/* Need Help */}
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our team is available 24/7 to assist with your booking
              </p>
              <Link
                to="/contact"
                className="block text-center luxury-button text-sm py-3"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Booking

