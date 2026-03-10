import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter, Youtube, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              We'd love to hear from you. Get in touch with us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-luxury-dark dark:text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Have questions about your booking or want to know more about our services? We're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lakeside, Pokhara 33700<br />
                      Kaski, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +977 61 412 345<br />
                      +977 61 412 346
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@himalayanluxury.com<br />
                      reservations@himalayanluxury.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-luxury-dark dark:text-white mb-1">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Front Desk: 24/7<br />
                      Office: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-luxury-dark dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="luxury-button"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="glass-card p-8">
                  <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+977 98XXXXXXXX"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="general">General Question</option>
                          <option value="feedback">Feedback</option>
                          <option value="corporate">Corporate Events</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full luxury-button flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Find Us</span>
            <h2 className="section-title mt-2">Our Location</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden rounded-2xl h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <div className="text-center">
              <MapPin className="mx-auto text-luxury-gold mb-4" size={48} />
              <p className="text-gray-600 dark:text-gray-300">
                Lakeside, Pokhara 33700, Kaski, Nepal
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Google Maps integration would go here)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

