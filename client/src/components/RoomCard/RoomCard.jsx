import { Link } from 'react-router-dom'
import { Star, Users, Wifi, Coffee, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const RoomCard = ({ room, index = 0 }) => {
  const {
    id,
    name,
    image,
    price,
    rating,
    reviewCount,
    description,
    capacity,
    amenities = [],
    size
  } = room

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-dark font-bold px-4 py-2 rounded-full">
            ${price}<span className="text-sm font-normal">/night</span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Star size={16} className="fill-luxury-gold text-luxury-gold" />
            <span className="font-semibold text-sm">{rating}</span>
            <span className="text-gray-500 text-sm">({reviewCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-2 group-hover:text-luxury-gold transition-colors">
            {name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Room Info */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{capacity} Guests</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{size} m²</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-6">
            {amenities.slice(0, 4).map((amenity, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 4 && (
              <span className="px-3 py-1 text-luxury-gold text-xs">
                +{amenities.length - 4} more
              </span>
            )}
          </div>

          {/* Action Button */}
          <Link
            to={`/rooms/${id}`}
            className="inline-flex items-center gap-2 text-luxury-gold font-semibold hover:gap-3 transition-all"
          >
            View Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default RoomCard

