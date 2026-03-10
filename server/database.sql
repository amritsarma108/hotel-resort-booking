-- Database Schema for Himalayan Luxury Stays Hotel Booking System
-- PostgreSQL Database

-- Create database
-- CREATE DATABASE hotel_booking;

-- Connect to database
-- \c hotel_booking;

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'guest',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rooms Table
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(500),
    images TEXT[],
    price DECIMAL(10, 2) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    capacity INTEGER DEFAULT 2,
    size INTEGER,
    bed_type VARCHAR(100),
    view_type VARCHAR(100),
    amenities TEXT[],
    room_type VARCHAR(100),
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    room_id INTEGER REFERENCES rooms(id),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INTEGER DEFAULT 1,
    room_type VARCHAR(100),
    special_requests TEXT,
    total_price DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'confirmed',
    payment_status VARCHAR(50) DEFAULT 'pending',
    booking_reference VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews Table
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    room_id INTEGER REFERENCES rooms(id),
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    image VARCHAR(500),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    text TEXT,
    review_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tourist Attractions Table
CREATE TABLE attractions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nepali_name VARCHAR(255),
    description TEXT,
    image VARCHAR(500),
    distance_from_hotel VARCHAR(100),
    highlights TEXT[],
    best_time_to_visit VARCHAR(255),
    difficulty VARCHAR(100),
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts Table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT,
    image VARCHAR(500),
    category VARCHAR(100),
    author VARCHAR(255),
    published_date DATE,
    read_time VARCHAR(50),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- Sample Rooms
INSERT INTO rooms (name, description, image, price, rating, review_count, capacity, size, bed_type, view_type, amenities, room_type) VALUES
('Deluxe Lake View Room', 'Spacious room with stunning panoramic views of Phewa Lake and the Annapurna mountains.', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', 250.00, 4.9, 128, 2, 45, 'King', 'Lake', ARRAY['Free WiFi', 'Lake View', 'Balcony', 'Mini Bar'], 'Deluxe'),
('Executive Suite', 'Luxurious suite featuring separate living area, private terrace, and premium amenities.', 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', 400.00, 4.8, 86, 3, 75, 'King', 'Mountain', ARRAY['Free WiFi', 'Living Room', 'Jacuzzi', 'Butler Service'], 'Suite'),
('Presidential Suite', 'The ultimate luxury experience with private pool, dedicated butler, and breathtaking views.', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', 800.00, 5.0, 42, 4, 150, 'King', 'Mountain', ARRAY['Free WiFi', 'Private Pool', 'Chef', 'Spa Room'], 'Presidential'),
('Standard Garden Room', 'Comfortable room with garden view, perfect for budget-conscious travelers.', 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', 150.00, 4.5, 215, 2, 35, 'Queen', 'Garden', ARRAY['Free WiFi', 'Garden View', 'TV'], 'Standard');

-- Sample Reviews
INSERT INTO reviews (name, location, image, rating, text, review_date) VALUES
('Sarah Mitchell', 'United Kingdom', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', 5, 'An absolutely magical experience! The staff went above and beyond to make our anniversary special.', '2024-12-10'),
('James Chen', 'Singapore', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', 5, 'Best hotel experience in Nepal. The combination of traditional Nepali hospitality with modern luxury is perfect.', '2024-12-08'),
('Emma Thompson', 'Australia', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', 5, 'From the moment we arrived, we were treated like royalty. The spa treatments are incredible!', '2024-12-05');

-- Sample Attractions
INSERT INTO attractions (name, nepali_name, description, image, distance_from_hotel, highlights, best_time_to_visit, difficulty, category) VALUES
('Mount Everest Region', 'सगरमाथा क्षेत्र', 'The roof of the world! Trek through the legendary Khumbu region.', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', '150 km', ARRAY['Everest Base Camp Trek', 'Namche Bazaar', 'Sherpa Culture'], 'March - May, September - November', 'Challenging', 'adventure'),
('Pokhara Lakes', 'पोखरा ताल', 'Experience the serene beauty of Phewa Lake.', 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80', '2 km', ARRAY['Boating', 'World Peace Pagoda', 'Sunset Views'], 'October - December', 'Easy', 'nature'),
('Chitwan National Park', 'चितवन राष्ट्रिय निकुञ्ज', 'Explore the rich biodiversity of Nepal''s first national park.', 'https://images.unsplash.com/photo-1564067118-95c1e2f5b877?w=800&q=80', '120 km', ARRAY['Jungle Safari', 'Elephant Bathing', 'Canoe Ride'], 'October - March', 'Easy', 'wildlife');

-- Create indexes for better performance
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_room ON bookings(room_id);
CREATE INDEX idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX idx_reviews_room ON reviews(room_id);
CREATE INDEX idx_contact_status ON contact_messages(status);

-- Create update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

