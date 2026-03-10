import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// In-memory data (would be replaced with PostgreSQL in production)
const rooms = [
  {
    id: 1,
    name: 'Deluxe Lake View Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    price: 250,
    rating: 4.9,
    reviewCount: 128,
    description: 'Spacious room with stunning panoramic views of Phewa Lake and the Annapurna mountains.',
    capacity: 2,
    size: 45,
    amenities: ['Free WiFi', 'Lake View', 'King Bed', 'Balcony', 'Mini Bar'],
    type: 'Deluxe',
    available: true
  },
  {
    id: 2,
    name: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    price: 400,
    rating: 4.8,
    reviewCount: 86,
    description: 'Luxurious suite featuring separate living area, private terrace, and premium amenities.',
    capacity: 3,
    size: 75,
    amenities: ['Free WiFi', 'Mountain View', 'Living Room', 'Jacuzzi', 'Butler Service'],
    type: 'Suite',
    available: true
  },
  {
    id: 3,
    name: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    price: 800,
    rating: 5.0,
    reviewCount: 42,
    description: 'The ultimate luxury experience with private pool, dedicated butler, and breathtaking views.',
    capacity: 4,
    size: 150,
    amenities: ['Free WiFi', 'Private Pool', 'Helipad Access', 'Chef', 'Spa Room'],
    type: 'Presidential',
    available: true
  },
  {
    id: 4,
    name: 'Standard Garden Room',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    price: 150,
    rating: 4.5,
    reviewCount: 215,
    description: 'Comfortable room with garden view, perfect for budget-conscious travelers.',
    capacity: 2,
    size: 35,
    amenities: ['Free WiFi', 'Garden View', 'Queen Bed', 'TV'],
    type: 'Standard',
    available: true
  }
]

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'An absolutely magical experience! The staff went above and beyond to make our anniversary special.',
    date: '2024-12-10'
  },
  {
    id: 2,
    name: 'James Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Best hotel experience in Nepal. The combination of traditional Nepali hospitality with modern luxury is perfect.',
    date: '2024-12-08'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'From the moment we arrived, we were treated like royalty. The spa treatments are incredible!',
    date: '2024-12-05'
  }
]

const bookings = []
const contactMessages = []

// API Routes

// GET /api/rooms - Get all rooms
app.get('/api/rooms', (req, res) => {
  res.json({
    success: true,
    data: rooms
  })
})

// GET /api/rooms/:id - Get single room
app.get('/api/rooms/:id', (req, res) => {
  const room = rooms.find(r => r.id === parseInt(req.params.id))
  if (!room) {
    return res.status(404).json({
      success: false,
      message: 'Room not found'
    })
  }
  res.json({
    success: true,
    data: room
  })
})

// POST /api/booking - Create a new booking
app.post('/api/booking', (req, res) => {
  const { name, email, phone, checkIn, checkOut, guests, roomType, specialRequests } = req.body
  
  if (!name || !email || !checkIn || !checkOut) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields'
    })
  }

  const booking = {
    id: bookings.length + 1,
    name,
    email,
    phone,
    checkIn,
    checkOut,
    guests,
    roomType,
    specialRequests,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }

  bookings.push(booking)

  res.status(201).json({
    success: true,
    message: 'Booking confirmed successfully',
    data: {
      bookingId: `HLS-${Date.now().toString(36).toUpperCase()}`,
      ...booking
    }
  })
})

// POST /api/contact - Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields'
    })
  }

  const contactMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    phone,
    subject,
    message,
    status: 'unread',
    createdAt: new Date().toISOString()
  }

  contactMessages.push(contactMessage)

  res.status(201).json({
    success: true,
    message: 'Message sent successfully',
    data: contactMessage
  })
})

// GET /api/reviews - Get all reviews
app.get('/api/reviews', (req, res) => {
  res.json({
    success: true,
    data: reviews
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

