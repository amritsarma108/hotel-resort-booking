import { useState } from 'react'
import { Calendar, Users, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const BookingForm = ({ room = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: null,
    checkOut: null,
    guests: 2,
    roomType: room?.name || 'Standard Room',
    specialRequests: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut || !room) return 0
    const nights = Math.ceil((formData.checkOut - formData.checkIn) / (1000 * 60 * 60 * 24))
    return nights > 0 ? nights * room.price : 0
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-2">
          Booking Confirmed!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you for your booking. We have sent a confirmation email to {formData.email}
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">Booking Reference</p>
          <p className="font-mono text-lg font-bold text-luxury-gold">HLS-{Date.now().toString(36).toUpperCase()}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 md:p-8"
    >
      <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-6">
        Book Your Stay
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+977 98XXXXXXXX"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Number of Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-in Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <DatePicker
                selected={formData.checkIn}
                onChange={(date) => setFormData(prev => ({ ...prev, checkIn: date }))}
                selectsStart
                startDate={formData.checkIn}
                endDate={formData.checkOut}
                minDate={new Date()}
                placeholderText="Select check-in"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-out Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <DatePicker
                selected={formData.checkOut}
                onChange={(date) => setFormData(prev => ({ ...prev, checkOut: date }))}
                selectsEnd
                startDate={formData.checkIn}
                endDate={formData.checkOut}
                minDate={formData.checkIn || new Date()}
                placeholderText="Select check-out"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Room Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
          >
            <option value="Standard Room">Standard Room - $150</option>
            <option value="Deluxe Room">Deluxe Room - $250</option>
            <option value="Suite">Suite - $400</option>
            <option value="Presidential Suite">Presidential Suite - $800</option>
          </select>
        </div>

        {/* Special Requests */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            placeholder="Any special requirements..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* Price Summary */}
        {room && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Room Rate</span>
              <span>${room.price} × {formData.checkIn && formData.checkOut ? Math.ceil((formData.checkOut - formData.checkIn) / (1000 * 60 * 60 * 24)) : 0} nights</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Taxes & Fees</span>
              <span>${calculateTotal() * 0.1}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-luxury-gold">${calculateTotal() * 1.1}</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full luxury-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-luxury-dark border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send size={18} />
              <span>Confirm Booking</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default BookingForm

