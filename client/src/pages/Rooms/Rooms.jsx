import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Filter, Grid, List, Star, Wifi, Waves, Utensils, Dumbbell, ChevronDown } from 'lucide-react'
import RoomCard from '../../components/RoomCard/RoomCard'

const Rooms = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [sortBy, setSortBy] = useState('recommended')

  const roomTypes = ['Standard', 'Deluxe', 'Suite', 'Presidential']
  const amenityOptions = ['Wifi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking', 'Bar', 'Room Service']

  // Dummy rooms data
  const allRooms = [
    {
      id: 1,
      name: 'Deluxe Lake View Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      price: 250,
      rating: 4.9,
      reviewCount: 128,
      description: 'Spacious room with stunning panoramic views of Phewa Lake and the Annapurna mountains.',
      capacity: 2,
      size: 45,
      amenities: ['Wifi', 'Lake View', 'King Bed', 'Balcony', 'Mini Bar'],
      type: 'Deluxe'
    },
    {
      id: 2,
      name: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      price: 400,
      rating: 4.8,
      reviewCount: 86,
      description: 'Luxurious suite featuring separate living area, private terrace, and premium amenities.',
      capacity: 3,
      size: 75,
      amenities: ['Wifi', 'Mountain View', 'Living Room', 'Jacuzzi', 'Butler Service', 'Pool'],
      type: 'Suite'
    },
    {
      id: 3,
      name: 'Presidential Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      price: 800,
      rating: 5.0,
      reviewCount: 42,
      description: 'The ultimate luxury experience with private pool, dedicated butler, and breathtaking views.',
      capacity: 4,
      size: 150,
      amenities: ['Wifi', 'Private Pool', 'Helipad Access', 'Chef', 'Spa Room', 'Gym'],
      type: 'Presidential'
    },
    {
      id: 4,
      name: 'Standard Garden Room',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      price: 150,
      rating: 4.5,
      reviewCount: 215,
      description: 'Comfortable room with garden view, perfect for budget-conscious travelers.',
      capacity: 2,
      size: 35,
      amenities: ['Wifi', 'Garden View', 'Queen Bed', 'TV'],
      type: 'Standard'
    },
    {
      id: 5,
      name: 'Family Suite',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      price: 350,
      rating: 4.7,
      reviewCount: 156,
      description: 'Spacious family room with connecting bedrooms and kids area.',
      capacity: 5,
      size: 90,
      amenities: ['Wifi', 'Kitchen', 'Living Room', 'Balcony', 'Parking', 'Gym'],
      type: 'Suite'
    },
    {
      id: 6,
      name: 'Honeymoon Suite',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
      price: 500,
      rating: 4.9,
      reviewCount: 78,
      description: 'Romantic suite with rose petals, champagne, and private candlelight dinner.',
      capacity: 2,
      size: 65,
      amenities: ['Wifi', 'Jacuzzi', 'King Bed', 'Champagne', 'Spa', 'Private Dinner'],
      type: 'Suite'
    },
    {
      id: 7,
      name: 'Mountain View Deluxe',
      image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&q=80',
      price: 280,
      rating: 4.8,
      reviewCount: 142,
      description: 'Wake up to breathtaking views of the Annapurna range.',
      capacity: 2,
      size: 48,
      amenities: ['Wifi', 'Mountain View', 'King Bed', 'Balcony', 'Heater'],
      type: 'Deluxe'
    },
    {
      id: 8,
      name: 'Budget Standard Room',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
      price: 120,
      rating: 4.3,
      reviewCount: 320,
      description: 'Affordable comfort with essential amenities for a pleasant stay.',
      capacity: 2,
      size: 30,
      amenities: ['Wifi', 'TV', 'Private Bathroom'],
      type: 'Standard'
    }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setRooms(allRooms)
      setFilteredRooms(allRooms)
      setLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    let filtered = [...rooms]

    // Filter by price
    filtered = filtered.filter(room => room.price >= priceRange[0] && room.price <= priceRange[1])

    // Filter by type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(room => selectedTypes.includes(room.type))
    }

    // Filter by amenities
    if (selectedAmenities.length > 0) {
      filtered = filtered.filter(room => 
        selectedAmenities.every(amenity => 
          room.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
        )
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredRooms(filtered)
  }, [rooms, priceRange, selectedTypes, selectedAmenities, sortBy])

  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark dark:text-white mb-4">
            Our Rooms
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Choose from our selection of {rooms.length} luxurious rooms and suites
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 text-luxury-gold rounded-lg hover:bg-luxury-gold/20 transition-colors"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-gray-500">Price:</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-32 accent-luxury-gold"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">${priceRange[1]}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-luxury-gold"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-luxury-gold text-luxury-dark' : ''}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-luxury-gold text-luxury-dark' : ''}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Room Types */}
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-dark dark:text-white">Room Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {roomTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedTypes.includes(type)
                            ? 'bg-luxury-gold text-luxury-dark'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-luxury-gold/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-dark dark:text-white">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {amenityOptions.map(amenity => (
                      <button
                        key={amenity}
                        onClick={() => toggleAmenity(amenity)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedAmenities.includes(amenity)
                            ? 'bg-luxury-gold text-luxury-dark'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-luxury-gold/20'
                        }`}
                      >
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3 text-luxury-dark dark:text-white">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-luxury-gold"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$0</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <span className="text-gray-600 dark:text-gray-300">
            Showing {filteredRooms.length} rooms
          </span>
        </div>

        {/* Room Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="glass-card animate-pulse">
                <div className="h-64 bg-gray-200 dark:bg-gray-700" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredRooms.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-luxury-dark dark:text-white mb-2">
              No rooms found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your filters to see more options
            </p>
            <button
              onClick={() => {
                setPriceRange([0, 1000])
                setSelectedTypes([])
                setSelectedAmenities([])
              }}
              className="luxury-button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rooms

