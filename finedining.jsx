import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const FineDining = () => {
  const restaurants = [
    { name: 'Mountain View Restaurant', type: 'Fine Dining', cuisine: 'Nepalese & International', description: 'Elegant dining with panoramic Himalayan views', hours: 'Breakfast: 6:30am - 10:30am', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', features: ['Panoramic views', 'Award-winning chefs', 'Wine cellar'] },
    { name: 'Lakeside Café', type: 'Casual Dining', cuisine: 'Light bites & Beverages', description: 'Relaxed atmosphere by the pool', hours: 'All day: 8am - 10pm', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', features: ['Lake view', 'Fresh smoothies', 'Live music'] },
    { name: 'Traditional Thali', type: 'Cultural Dining', cuisine: 'Authentic Nepali', description: 'Authentic Nepali dining with dance', hours: 'Dinner: 7pm - 10pm', image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80', features: ['Traditional thali', 'Cultural show', 'Chef table'] },
    { name: "Private Chef's Table", type: 'Exclusive', cuisine: 'Custom Menu', description: 'Intimate dining with personalized menu', hours: 'By reservation', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', features: ['Personal chef', 'Wine pairing', 'Romantic setup'] }
  ]
  const features = ['Award-winning chefs', 'Organic local ingredients', 'Dietary accommodations', 'Room service 24/7']

  return (
    <div className="min-h-screen bg-luxury-cream">
      <section className="relative h-[70vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" alt="Fine Dining" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-4 py-2 bg-luxury-gold/20 rounded-full text-luxury-gold text-sm mb-4">Culinary Excellence</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Fine Dining</h1>
            <p className="text-white/80 text-lg">Experience the finest Nepali and international cuisine</p>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-luxury-dark">Our Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.map((restaurant, idx) => (
              <div key={idx} className="glass-card overflow-hidden group hover:shadow-2xl">
                <div className="h-48 overflow-hidden">
                  <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-luxury-gold mb-2">
                    {restaurant.type} • {restaurant.cuisine}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-dark mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
                  <p className="text-gray-500 text-xs mb-4">{restaurant.hours}</p>
                  <ul className="space-y-1 mb-4">
                    {restaurant.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={12} className="text-luxury-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking" className="block w-full text-center px-4 py-2 bg-luxury-gold text-luxury-dark rounded-full text-sm font-semibold">Reserve Table</Link>
                </div>
            ))}
          </div>
      </section>

      <section className="py-20 bg-luxury-dark text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Reserve Your Table</h2>
        <p className="text-gray-300 mb-8">Experience culinary excellence at our restaurants</p>
        <Link to="/booking" className="inline-block px-8 py-4 bg-luxury-gold text-luxury-dark rounded-full font-semibold">Make Reservation</Link>
      </section>
    </div>
  )
}

export default FineDining
