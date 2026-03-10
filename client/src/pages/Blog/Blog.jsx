import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'travel', name: 'Travel Tips' },
    { id: 'culture', name: 'Culture' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'food', name: 'Food & Dining' }
  ]

  const posts = [
    {
      id: 1,
      title: 'Essential Tips for First-Time Visitors to Nepal',
      excerpt: 'Planning your first trip to Nepal? Here are everything you need to know before embarking on your Himalayan adventure.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      category: 'travel',
      author: 'Raj Kumar Sharma',
      date: 'December 15, 2024',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Trekking Guide to Annapurna Circuit',
      excerpt: 'Everything you need to know about completing the famous Annapurna Circuit trek, from permits to packing list.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      category: 'adventure',
      author: 'Binod Basnet',
      date: 'December 10, 2024',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Exploring the Spiritual Heart of Lumbini',
      excerpt: 'A journey through the birthplace of Buddha and what makes this UNESCO World Heritage Site so special.',
      image: 'https://images.unsplash.com/photo-1569423100716-33899a868f5e?w=800&q=80',
      category: 'culture',
      author: 'Priya Devi',
      date: 'December 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Traditional Nepali Dishes You Must Try',
      excerpt: 'From dal bhat to momos, discover the delicious flavors of Nepali cuisine that you can enjoy at our hotel.',
      image: 'https://images.unsplash.com/photo-1567117678304-6a61f0e9c07c?w=800&q=80',
      category: 'food',
      author: 'Chef Binod',
      date: 'November 28, 2024',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Best Places to Watch Sunrise in Pokhara',
      excerpt: 'Discover the most breathtaking sunrise viewpoints in the Pokhara valley for an unforgettable experience.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      category: 'travel',
      author: 'Sita Tamang',
      date: 'November 20, 2024',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Understanding Nepalese Festivals',
      excerpt: 'A guide to the vibrant festivals celebrated throughout the year in Nepal.',
      image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80',
      category: 'culture',
      author: 'Raj Kumar Sharma',
      date: 'November 15, 2024',
      readTime: '9 min read'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-luxury-cream dark:bg-luxury-dark pt-24 pb-12">
      {/* Header */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Travel Blog</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Tips, stories, and inspiration for your Nepal adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-luxury-darkSecondary border border-gray-200 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-luxury-gold focus:border-transparent outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-luxury-gold text-luxury-dark'
                        : 'bg-white dark:bg-luxury-darkSecondary text-gray-600 dark:text-gray-300 hover:bg-luxury-gold/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-luxury-gold text-luxury-dark text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-white/80 mb-4 max-w-2xl">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {posts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {posts[0].date}
                  </span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-luxury-gold/90 text-luxury-dark text-xs font-medium rounded-full capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-luxury-dark dark:text-white mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="luxury-button">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest travel tips and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full outline-none focus:border-luxury-gold text-white"
              />
              <button className="px-8 py-3 bg-luxury-gold text-luxury-dark font-semibold rounded-full hover:bg-luxury-goldLight transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog

