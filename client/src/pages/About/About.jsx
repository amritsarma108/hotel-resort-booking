import { motion } from 'framer-motion'
import { Award, Heart, Star, Users, Globe, Leaf } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Raj Kumar Sharma',
      role: 'General Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Over 20 years of experience in luxury hospitality'
    },
    {
      name: 'Priya Devi',
      role: 'Head of Guest Experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Passionate about creating unforgettable moments'
    },
    {
      name: 'Binod Basnet',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Award-winning chef specializing in Nepali cuisine'
    },
    {
      name: 'Sita Tamang',
      role: 'Spa Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'Certified wellness expert with holistic approach'
    }
  ]

  const awards = [
    { year: '2024', name: 'Best Luxury Hotel in Nepal', organization: 'World Travel Awards' },
    { year: '2023', name: 'Top 10 Resorts in Asia', organization: 'Condé Nast Traveler' },
    { year: '2023', name: 'Excellence in Hospitality', organization: 'Pacific Asia Travel' },
    { year: '2022', name: 'Best Spa & Wellness', organization: 'Luxury Hotel Awards' },
    { year: '2022', name: 'Sustainable Tourism Award', organization: 'Green Hotel Association' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Guest Satisfaction',
      description: 'We prioritize our guests\' needs above all else, ensuring personalized service'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every detail, from decor to dining'
    },
    {
      icon: Globe,
      title: 'Local Authenticity',
      description: 'We celebrate Nepali culture and heritage in our hospitality'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to sustainable and eco-friendly practices'
    }
  ]

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"
          alt="Resort Overview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Discover the story behind Nepal's premier luxury destination
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-luxury-gold font-medium">Our Story</span>
              <h2 className="section-title mt-2 mb-6">A Legacy of Luxury</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2009, Himalayan Luxury Stays began as a small boutique hotel with a vision to showcase the beauty of Nepal while providing world-class hospitality. Over the years, we have grown to become the premier luxury destination in the Himalayas.
                </p>
                <p>
                  Our name reflects our commitment to offering the finest accommodations in one of the world's most breathtaking locations. Nestled in the heart of Pokhara, with stunning views of the Annapurna mountain range, we provide an unparalleled escape for discerning travelers.
                </p>
                <p>
                  Today, we continue to innovate and exceed expectations, blending traditional Nepali warmth with modern luxury to create unforgettable experiences for our guests.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
                alt="Hotel History"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
                alt="Resort Views"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-luxury-gold" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide exceptional luxury experiences that celebrate the beauty and culture of Nepal while creating lasting memories for our guests through impeccable service and authentic hospitality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                <Star className="text-luxury-gold" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-luxury-dark dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be recognized as the finest luxury hotel in Nepal, setting the standard for excellence in hospitality while promoting sustainable tourism and preserving local culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">What We Stand For</span>
            <h2 className="section-title mt-2">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                  <value.icon className="text-luxury-gold" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-luxury-darkSecondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Meet Our Team</span>
            <h2 className="section-title mt-2">Leadership</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-luxury-gold font-medium">Recognition</span>
            <h2 className="section-title mt-2">Awards & Achievements</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-luxury-gold" size={24} />
                </div>
                <div>
                  <span className="text-sm text-luxury-gold font-medium">{award.year}</span>
                  <h4 className="font-semibold text-luxury-dark dark:text-white">{award.name}</h4>
                  <p className="text-sm text-gray-500">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

