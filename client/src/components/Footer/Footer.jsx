import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Spa & Wellness', path: '/spa-wellness' },
    { name: 'Fine Dining', path: '/fine-dining' },
    { name: 'Adventure Tours', path: '/adventure-tours' },
    { name: 'Wedding & Events', path: '/wedding-events' },
  ]

  return (
    <footer className="bg-luxury-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center">
                <span className="text-luxury-dark font-display text-xl font-bold">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold">Himalayan</span>
                <span className="text-xs text-gray-400">Luxury Stays</span>
              </div>
            </div>
            <p className="text-gray-400">
              Experience the pinnacle of luxury in the heart of the Himalayas. Your journey to paradise starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-luxury-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-gray-400 hover:text-luxury-gold transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-luxury-gold flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  Lakeside, Pokhara 33700,<br />Kaski, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-luxury-gold flex-shrink-0" size={20} />
                <a href="tel:+97761412345" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  +977 61 412 345
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-luxury-gold flex-shrink-0" size={20} />
                <a href="mailto:info@himalayanluxury.com" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  info@himalayanluxury.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 rounded-l-lg border border-white/20 focus:border-luxury-gold outline-none"
                />
                <button className="px-4 py-3 bg-luxury-gold text-luxury-dark rounded-r-lg hover:bg-luxury-goldLight transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Himalayan Luxury Stays. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

