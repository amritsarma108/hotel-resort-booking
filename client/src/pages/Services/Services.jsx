import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, UtensilsCrossed, Mountain, Heart, ArrowRight, Calendar, Phone } from 'lucide-react'

const services = [
  {
    id: 'spa',
    name: 'Spa & Wellness',
    description: 'Rejuvenate with Himalayan stone therapy and Ayurvedic treatments',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    icon: Sparkles,
    price: 'From $80',
    link: '/services'
  },
  {
    id: 'dining',
    name: 'Fine Dining',
    description: 'Award-winning cuisine with stunning mountain views',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    icon: UtensilsCrossed,
    price: 'View Menu',
    link: '/services#dining'
  },
  {
    id: 'adventure',
    name: 'Adventure Tours',
    description: 'Trekking, rafting, and Himalayan expeditions',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    icon: Mountain,
    price: 'From $55',
    link: '/services#adventure'
  },
  {
    id: 'wedding',
    name: 'Wedding & Events',
    description: 'Magical celebrations in stunning venues',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    icon: Heart,
    price: 'Inquire Now',
    link: '/services#wedding'
  }
]

const Services = () => {
  return (
    <div className="min-h-screen bg-luxury-cream">
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80" 
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              World-class experiences designed for your ultimate relaxation and adventure
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5]">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center mb-3">
                    <service.icon size={24} className="text-luxury-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{service.name}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <span className="text-luxury-gold font-medium text-sm">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
      </section>

      <section className="py-20 bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Book Your Experience
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Reserve your spa treatment, table, or adventure tour today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-luxury-gold text-luxury-dark font-semibold rounded-full hover:bg-luxury-goldLight transition-all hover:scale-105"
            >
              <Calendar size={20} />
              Book Now
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              Contact Us
            </Link>
          </div>
      </section>
    </div>
  )
}

export default Services
