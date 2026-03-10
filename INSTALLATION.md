# Himalayan Luxury Stays - Premium Hotel & Resort Booking Website

A production-level premium hotel booking website built with React, TailwindCSS, and Node.js.

## Project Structure

```
hotel-resort-booking/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar/      # Navigation bar with dark mode
│   │   │   ├── Hero/        # Hero section with video background
│   │   │   ├── RoomCard/    # Room card component
│   │   │   ├── Gallery/     # Lightbox gallery
│   │   │   ├── BookingForm/ # Booking form component
│   │   │   ├── Footer/      # Site footer
│   │   │   └── Chatbot/     # AI chatbot placeholder
│   │   ├── pages/           # Page components
│   │   │   ├── Home/        # Home page
│   │   │   ├── Rooms/       # Room listing page
│   │   │   ├── RoomDetails/ # Individual room details
│   │   │   ├── Booking/     # Booking page
│   │   │   ├── Gallery/     # Gallery page
│   │   │   ├── About/       # About hotel page
│   │   │   ├── Contact/     # Contact page
│   │   │   ├── Tourism/     # Tourist information
│   │   │   └── Blog/        # Blog/travel tips
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
│
├── server/                   # Node.js Backend
│   ├── index.js             # Express server
│   ├── package.json
│   └── database.sql         # PostgreSQL schema
│
├── TODO.md                  # Project plan
└── README.md                # This file
```

## Tech Stack

### Frontend
- **React** + **Vite** - Modern frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **React Router** - Client-side routing
- **React Datepicker** - Date selection

### Backend (Demo)
- **Node.js** + **Express** - REST API
- **PostgreSQL** - Database (schema provided)

## Features

### Pages
1. **Home Page** - Hero, featured rooms, amenities, testimonials, attractions
2. **Rooms Listing** - Filterable room grid with sorting
3. **Room Details** - Image gallery, amenities, booking calendar
4. **Booking** - Complete booking form with price calculation
5. **Gallery** - Lightbox photo gallery with categories
6. **About** - Hotel story, team, awards
7. **Contact** - Contact form with Google Maps placeholder
8. **Tourist Info** - Nepal attractions guide
9. **Blog** - Travel tips and articles

### UI Features
- Dark/Light mode toggle
- Glassmorphism cards
- Smooth scroll animations
- Responsive design
- Mobile-friendly navigation
- AI Chatbot placeholder

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (optional, for full database)

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on http://localhost:5173

### Backend Setup (Optional)

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the API server
npm start
```

The API will run on http://localhost:3001

### Database Setup

1. Install PostgreSQL
2. Create a database named `hotel_booking`
3. Run the SQL commands from `server/database.sql`

Or use the demo backend with in-memory data.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/rooms | Get all rooms |
| GET | /api/rooms/:id | Get single room |
| POST | /api/booking | Create booking |
| POST | /api/contact | Submit contact form |
| GET | /api/reviews | Get all reviews |
| GET | /api/health | Health check |

## Demo Data

The project includes demo data for:
- 8 luxury rooms
- 3 customer reviews
- 6 tourist attractions
- 6 blog posts

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  luxury: {
    dark: '#0f172a',
    gold: '#d4af37',
    // ...
  }
}
```

### Images
Replace the Unsplash URLs in the data files with your own images.

## Build for Production

```bash
# Build frontend
cd client
npm run build
```

The production build will be in `client/dist/`

## License

This project is for demonstration purposes.

