import { Link } from 'react-router-dom'
import { Clock, CheckCircle } from 'lucide-react'

const AdventureTours = () => {
  const adventures = [
    { name: 'Sarangkot Sunrise Trek', duration: '4 hours', difficulty: 'Easy', price: 85, description: 'Witness breathtaking Himalayan sunrise', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', highlights: ['Expert guide', 'Breakfast included', 'Hotel pickup'] },
    { name: 'Fewa Lake Kayaking', duration: '2 hours', difficulty: 'Easy', price: 55, description: 'Paddle on the serene Fewa Lake', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', highlights: ['Professional instructor', 'Safety equipment', 'Photos included'] },
    { name: 'Mardi Himal Expedition', duration: '5 days', difficulty: 'Challenging', price: 850, description: 'Trek to Mardi Himal base camp', image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80', highlights: ['Experienced guide', 'Teahouse accommodation', 'All meals'] },
    { name: 'Trishuli River Rafting', duration: '1 day', difficulty: 'Moderate', price: 120, description: 'Exhilarating white water rafting', image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80', highlights: ['Safety gear', 'Lunch included', 'Professional rafters'] }
  ]
  const features = ['Certified guides', 'Small groups', 'Safety first', 'Custom itineraries']

  return (
    <div className="min-h-screen bg-luxury-cream">
      <section className="relative h-[70vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Adventure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-4 py-2 bg-luxury-gold/20 rounded-full text-luxury-gold text-sm mb-4">Explore the Himalayas</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Adventure Tours</h1>
            <p className="text-white/80 text-lg">Discover thrilling experiences</p>
          </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="text-luxury-gold" size={20} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-luxury-dark">Our Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adventures.map((adventure, idx) => (
              <div key={idx} className="glass-card overflow-hidden group hover:shadow-2xl">
                <div className="h-48 overflow-hidden">
                  <img src={adventure.image} alt={adventure.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-luxury-gold mb-2">
                    <Clock size={14} /> {adventure.duration} • {adventure.difficulty}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-dark mb-2">{adventure.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{adventure.description}</p>
                  <ul className="space-y-1 mb-4">
                    {adventure.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={12} className="text-luxury-gold" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-luxury-dark">${adventure.price}</span>
                    <Link to="/booking" className="px-4 py-2 bg-luxury-gold text-luxury-dark rounded-full text-sm font-semibold">Book Now</Link>
                  </div>
              </div>
            ))}
          </div>
      </section>

      <section className="py-20 bg-luxury-dark text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Book Your Adventure</h2>
        <p className="text-gray-300 mb-8">Ready for an unforgettable experience?</p>
        <Link to="/booking" className="inline-block px-8 py-4 bg-luxury-gold text-luxury-dark rounded-full font-semibold">Book Now</Link>
      </section>
    </div>
  )
}

export default AdventureTours
