import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Wifi, Waves, Utensils, Dumbbell, Car, Coffee, ChevronLeft, ChevronRight, Calendar, Users, ArrowRight, Check } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const RoomDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [room, setRoom] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [guests, setGuests] = useState(2)
  const [loading, setLoading] = useState(true)

  const roomImages = [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80'
  ]

  const amenitiesList = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet' },
    { icon: Waves, name: 'Private Pool', description: 'In-room swimming' },
    { icon: Utensils, name: 'Room Service', description: '24/7 dining' },
    { icon: Dumbbell, name: 'Fitness Center', description: 'State-of-the-art gym' },
    { icon: Car, name: 'Free Parking', description: 'Secure parking' },
    { icon: Coffee, name: 'Breakfast Included', description: 'Daily breakfast' }
  ]

  // Dummy room data
  const dummyRoom = {
    id: id,
    name: 'Deluxe Lake View Room',
    images: roomImages,
    price: 250,
    rating: 4.9,
    reviewCount: 128,
    description: 'Experience unparalleled luxury in our Deluxe Lake View Room, where stunning panoramic views of Phewa Lake and the Annapurna mountains meet world-class amenities. This meticulously designed space features a king-sized bed with premium linens, a private balcony perfect for morning coffee, and a spacious marble bathroom with rain shower and deep soaking tub. The room is equipped with modern technology including a 55-inch smart TV, sound system, and intelligent room controls.',
    fullDescription: 'Our Deluxe Lake View Room offers an exceptional blend of comfort and natural beauty. Wake up to the gentle reflections of the lake and fall asleep to the distant glow of city lights. The room spans 45 square meters of meticulously designed living space, featuring contemporary Nepali design elements alongside modern luxury amenities.\n\nThe private balcony is furnished with comfortable seating, perfect for enjoying your morning coffee while watching the sunrise over the Himalayas. The en-suite bathroom features heated floors, a rainfall shower, and a separate soaking tub with lake views.\n\nFor your convenience, the room includes a mini-bar, espresso machine, safe, and ample storage space. Our dedicated butler service ensures that every need is met with personalized attention.',
    capacity: 2,
    size: 45,
    bedType: 'King',
    view: 'Lake & Mountain',
    amenities: ['Free WiFi', 'Lake View', 'King Bed', 'Balcony', 'Mini Bar', 'Room Service', 'Smart TV', 'Air Conditioning', 'Heating', 'Safe', 'Hairdryer', 'Slippers', 'Bathrobes'],
    available: true
  }

  useEffect(() => {
    setTimeout(() => {
      setRoom(dummyRoom)
      setLoading(false)
    }, 500)
  }, [id])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % roomImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + roomImages.length) % roomImages.length)
  }

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
    return nights > 0 ? nights * (room?.price || 0) : 0
  }

  const handleBooking = () => {
    navigate(`/booking/${room.id}?checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}&guests=${guests}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-8" />
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-luxury-gold">Home</Link>
            <span>/</span>
            <Link to="/rooms" className="hover:text-luxury-gold">Rooms</Link>
            <span>/</span>
            <span className="text-luxury-dark dark:text-white">{room.name}</span>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
              <img
                src={roomImages[currentImage]}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {roomImages.slice(1, 5).map((img, idx) => (
                <div
                  key={idx}
                  className={`relative h-48 lg:h-[240px] overflow-hidden rounded-2xl cursor-pointer ${currentImage === idx + 1 ? 'ring-4 ring-luxury-gold' : ''}`}
                  onClick={() => setCurrentImage(idx + 1)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-display text-4xl font-bold text-luxury-dark dark:text-white mb-2">
                    {room.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star size={20} className="fill-luxury-gold text-luxury-gold" />
                      <span className="font-semibold">{room.rating}</span>
                      <span className="text-gray-500">({room.reviewCount} reviews)</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-600 dark:text-gray-300">{room.size} m²</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-600 dark:text-gray-300">{room.bedType} Bed</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-luxury-gold">${room.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Room Info */}
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                Room Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Users className="mx-auto text-luxury-gold mb-2" size={24} />
                  <span className="block font-semibold">{room.capacity} Guests</span>
                  <span className="text-sm text-gray-500">Maximum</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="block text-2xl font-bold text-luxury-gold">{room.size}</span>
                  <span className="text-sm text-gray-500">Square Meters</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="block text-lg font-semibold">{room.bedType}</span>
                  <span className="text-sm text-gray-500">Bed Type</span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="block text-lg font-semibold">{room.view}</span>
                  <span className="text-sm text-gray-500">View</span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                Room Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-luxury-gold flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-200">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-4">
                About This Room
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {room.fullDescription}
              </p>
            </div>
          </motion.div>

          {/* Booking Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-6">
                Book This Room
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-in</label>
                  <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={new Date()}
                    placeholderText="Select check-in"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-out</label>
                  <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn || new Date()}
                    placeholderText="Select check-out"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {checkIn && checkOut && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">${room.price} × {Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))} nights</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
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

              <button
                onClick={handleBooking}
                disabled={!checkIn || !checkOut}
                className="w-full luxury-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar size={18} />
                <span>Book Now</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Free cancellation up to 24 hours before check-in
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails

