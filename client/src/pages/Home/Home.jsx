import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Wifi, Waves, Utensils, Dumbbell, MapPin, Quote } from 'lucide-react'
import Hero from '../../components/Hero/Hero'
import RoomCard from '../../components/RoomCard/RoomCard'
import Chatbot from '../../components/Chatbot/Chatbot'

const Home = () => {
  const featuredRooms = [
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
      amenities: ['Lake View', 'King Bed', 'Balcony', 'Mini Bar']
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
      amenities: ['Mountain View', 'Living Room', 'Jacuzzi', 'Butler Service']
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
      amenities: ['Private Pool', 'Helipad Access', 'Chef', 'Spa Room']
    }
  ]

  const amenities = [
    { icon: Waves, name: 'Infinity Pool', description: 'Rooftop pool with mountain views' },
    { icon: Utensils, name: 'Fine Dining', description: 'Award-winning restaurants' },
    { icon: Dumbbell, name: 'Fitness Center', description: '24/7 state-of-the-art gym' },
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout' }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'An absolutely magical experience! The staff went above and beyond to make our anniversary special. The views are breathtaking and the rooms are luxurious.'
    },
    {
      id: 2,
      name: 'James Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'Best hotel experience in Nepal. The combination of traditional Nepali hospitality with modern luxury is perfect. Will definitely return!'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Australia',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'From the moment we arrived, we were treated like royalty. The spa treatments are incredible and the local tours organized by the hotel were exceptional.'
    }
  ]

  const attractions = [
    {
      id: 1,
      name: 'Fewa Lake',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80',
      distance: '2 km',
      description: 'Serene lake with boat rides and lakeside cafes'
    },
    {
      id: 2,
      name: 'Sarangkot',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      distance: '12 km',
      description: 'Famous sunrise viewpoint overlooking the Himalayas'
    },
    {
      id: 3,
      name: 'David Falls',
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80',
      distance: '8 km',
      description: 'Stunning waterfall and caves nearby'
    }
  ]

  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Happy Guests' },
    { value: '120+', label: 'Luxury Rooms' },
    { value: '25+', label: 'Awards Won' }
  ]

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Rooms Section */}
      <section className="py-20 bg-luxury-cream dark:bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Premium Accommodations</span>
            <h2 className="section-title mt-2">Featured Rooms</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Experience unparalleled luxury in our carefully curated selection of rooms and suites
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center gap-2 luxury-button">
              View All Rooms
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">World-Class Facilities</span>
            <h2 className="section-title mt-2">Hotel Amenities</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <amenity.icon className="text-luxury-gold" size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-2">
                  {amenity.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Experience */}
      <section className="py-20 bg-luxury-cream dark:bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-luxury-gold font-medium">Luxury Redefined</span>
              <h2 className="section-title mt-2 mb-6">Experience Himalayan Luxury</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nestled in the heart of Pokhara, our resort offers a unique blend of traditional Nepali hospitality and modern luxury. Wake up to stunning mountain views, indulge in world-class dining, and immerse yourself in the rich culture of Nepal.
              </p>
              <ul className="space-y-4 mb-8">
                {['Award-winning spa & wellness center', 'Private dining experiences', 'Curated adventure tours', 'Cultural evening programs'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-luxury-gold font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80"
                alt="Resort view"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
                alt="Pool"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                alt="Dining"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80"
                alt="Spa"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Guest Reviews</span>
            <h2 className="section-title mt-2">What Our Guests Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <Quote className="text-luxury-gold mb-4" size={32} />
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-20 bg-luxury-cream dark:bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Explore Nepal</span>
            <h2 className="section-title mt-2">Nearby Attractions</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Discover the magic of Pokhara and its surrounding wonders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin size={16} className="text-luxury-gold" />
                    <span className="text-sm">{attraction.distance} from hotel</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-2 group-hover:text-luxury-gold transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tourism" className="inline-flex items-center gap-2 luxury-button">
              Explore All Attractions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="block text-5xl font-bold text-luxury-gold mb-2">{stat.value}</span>
                <span className="text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-cream dark:bg-luxury-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNkNGEzNzAiLz48L2c+PC9zdmc+')] animate-pulse" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-luxury-dark dark:text-white mb-6">
              Book Your Luxury Stay Today
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Experience the magic of the Himalayas. Book now and get 20% off your first stay.
            </p>
            <Link to="/booking" className="luxury-button inline-flex items-center gap-2">
              Reserve Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}

export default Home

