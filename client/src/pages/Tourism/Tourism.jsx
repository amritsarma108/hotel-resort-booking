import { motion } from 'framer-motion'
import { MapPin, Mountain, TreePine, Landmark, Compass, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Tourism = () => {
  const attractions = [
    {
      id: 1,
      name: 'Mount Everest Region',
      nepaliName: 'सगरमाथा क्षेत्र',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      distance: '150 km from hotel',
      description: 'The roof of the world! Trek through the legendary Khumbu region, visit ancient monasteries, and witness breathtaking views of Mount Everest and the surrounding Himalayan peaks.',
      highlights: ['Everest Base Camp Trek', 'Namche Bazaar', 'Sherpa Culture', 'Mountain Flight'],
      bestTime: 'March - May, September - November',
      difficulty: 'Challenging',
      icon: Mountain
    },
    {
      id: 2,
      name: 'Pokhara Lakes',
      nepaliName: 'पोखरा ताल',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80',
      distance: '2 km from hotel',
      description: 'Experience the serene beauty of Phewa Lake, Begnas Lake, and Rupa Lake. Enjoy boating, fishing, or simply soaking in the panoramic views of the Annapurna range reflecting on the water.',
      highlights: ['Boating on Phewa Lake', 'World Peace Pagoda', 'Lakeside Walk', 'Sunset Views'],
      bestTime: 'October - December, February - April',
      difficulty: 'Easy',
      icon: MapPin
    },
    {
      id: 3,
      name: 'Chitwan National Park',
      nepaliName: 'चितवन राष्ट्रिय निकुञ्ज',
      image: 'https://images.unsplash.com/photo-1564067118-95c1e2f5b877?w=800&q=80',
      distance: '120 km from hotel',
      description: 'Explore the rich biodiversity of Nepal\'s first national park. Encounter endangered one-horned rhinoceros, Bengal tigers, and over 500 species of birds in their natural habitat.',
      highlights: ['Jungle Safari', 'Elephant Bathing', 'Canoe Ride', 'Tharu Culture'],
      bestTime: 'October - March',
      difficulty: 'Easy - Moderate',
      icon: TreePine
    },
    {
      id: 4,
      name: 'Lumbini',
      nepaliName: 'लुम्बिनी',
      image: 'https://images.unsplash.com/photo-1569423100716-33899a868f5e?w=800&q=80',
      distance: '250 km from hotel',
      description: 'Visit the birthplace of Lord Buddha, a UNESCO World Heritage Site. Explore ancient monasteries, the Maya Devi Temple, and learn about the foundations of Buddhism.',
      highlights: ['Maya Devi Temple', 'Ashoka Pillar', 'Monastery Zone', 'Bodhi Tree'],
      bestTime: 'November - February',
      difficulty: 'Easy',
      icon: Landmark
    },
    {
      id: 5,
      name: 'Annapurna Circuit',
      nepaliName: 'अन्नपूर्ण परिक्रमा',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      distance: '80 km from hotel',
      description: 'One of the world\'s most famous trekking routes, circuiting the Annapurna Massif. Experience diverse landscapes, from subtropical forests to high-altitude deserts.',
      highlights: ['Thorong La Pass', 'Tilicho Lake', 'Traditional Villages', 'Hot Springs'],
      bestTime: 'March - May, September - November',
      difficulty: 'Challenging',
      icon: Compass
    },
    {
      id: 6,
      name: 'Nagarkot',
      nepaliName: 'नागरकोट',
      image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=800&q=80',
      distance: '200 km from hotel',
      description: 'A popular hill station known for its spectacular sunrise views over the Himalayas. On clear days, you can see Mount Everest from this vantage point.',
      highlights: ['Sunrise Viewpoint', 'Hiking Trails', 'Nagarkot Tower', 'Local Villages'],
      bestTime: 'October - March',
      difficulty: 'Easy',
      icon: Mountain
    }
  ]

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Nepal Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Tourist Information</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Discover the wonders of Nepal - from Himalayan peaks to ancient temples
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title mb-6">Explore Nepal with Us</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nepal is a land of extraordinary diversity, from the world's highest peaks to ancient temples and rich cultural heritage. Our hotel serves as the perfect base for exploring all that this beautiful country has to offer. Whether you're seeking adventure or spiritual enlightenment, Nepal has something for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Popular Destinations</span>
            <h2 className="section-title mt-2">Nearby Attractions</h2>
          </motion.div>

          <div className="space-y-12">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden group">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-sm bg-luxury-gold px-3 py-1 rounded-full">
                        {attraction.distance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <attraction.icon className="text-luxury-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white">
                        {attraction.name}
                      </h3>
                      <p className="text-luxury-gold text-sm font-medium">{attraction.nepaliName}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    {attraction.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <span className="block text-xs text-gray-500">Best Time</span>
                      <span className="text-sm font-medium text-luxury-dark dark:text-white">{attraction.bestTime}</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <span className="block text-xs text-gray-500">Difficulty</span>
                      <span className="text-sm font-medium text-luxury-dark dark:text-white">{attraction.difficulty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Plan Your Trip</span>
            <h2 className="section-title mt-2">Travel Tips</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Best Time to Visit', content: 'October to November (autumn) and March to May (spring) offer the best weather and clearest mountain views.' },
              { title: 'What to Pack', content: 'Layers for varying temperatures, comfortable walking shoes, sunscreen, altitude sickness medication, and modest clothing for temples.' },
              { title: 'Getting Around', content: 'Domestic flights connect major destinations. For more flexibility, hire a private car or use local buses. We can arrange transportation for you.' }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tip.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let us help you plan your perfect Nepal adventure. Our concierge team can arrange tours, permits, and transportation.
            </p>
            <Link to="/contact" className="luxury-button inline-flex items-center gap-2">
              Contact Us for Help
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tourism

