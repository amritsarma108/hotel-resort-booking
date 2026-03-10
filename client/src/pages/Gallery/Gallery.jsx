import { useState } from 'react'
import { motion } from 'framer-motion'
import GalleryComponent from '../../components/Gallery/Gallery'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'resort', name: 'Resort' },
    { id: 'dining', name: 'Dining' },
    { id: 'spa', name: 'Spa' },
    { id: 'activities', name: 'Activities' }
  ]

  const allImages = [
    { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', category: 'rooms', alt: 'Deluxe Room' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', category: 'rooms', alt: 'Executive Suite' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', category: 'rooms', alt: 'Presidential Suite' },
    { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', category: 'rooms', alt: 'Standard Room' },
    { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80', category: 'rooms', alt: 'Family Suite' },
    { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', category: 'resort', alt: 'Resort Exterior' },
    { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', category: 'resort', alt: 'Pool Area' },
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', category: 'resort', alt: 'Lobby' },
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', category: 'resort', alt: 'Resort View' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', category: 'dining', alt: 'Fine Dining' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', category: 'dining', alt: 'Restaurant' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', category: 'dining', alt: 'Rooftop Bar' },
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', category: 'spa', alt: 'Spa Treatment' },
    { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', category: 'spa', alt: 'Spa Room' },
    { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbec7d?w=800&q=80', category: 'spa', alt: 'Massage' },
    { src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80', category: 'activities', alt: 'Yoga' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', category: 'activities', alt: 'Trekking' },
    { src: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80', category: 'activities', alt: 'Boating' }
  ]

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory)

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
            Our Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore the beauty of Himalayan Luxury Stays through our curated collection
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-luxury-gold text-luxury-dark'
                  : 'bg-white dark:bg-luxury-darkSecondary text-gray-600 dark:text-gray-300 hover:bg-luxury-gold/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <GalleryComponent images={filteredImages} />
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery

