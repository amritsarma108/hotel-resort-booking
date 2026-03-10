import { useState } from 'react'
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI travel assistant. Ask me about rooms, tourism activities, and hotel services in Nepal.'
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getBotResponse(inputValue)
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('room') || lowerInput.includes('price') || lowerInput.includes('book')) {
      return 'We offer a variety of luxury rooms starting from $150 per night. Our Deluxe Rooms and Suites are very popular. Would you like me to show you our room listings?'
    }
    if (lowerInput.includes('nepal') || lowerInput.includes('tourist') || lowerInput.includes('attraction')) {
      return 'Nepal has amazing attractions! From the Everest region to Pokhara lakes and Chitwan National Park. Would you like detailed information about any specific destination?'
    }
    if (lowerInput.includes('spa') || lowerInput.includes('wellness') || lowerInput.includes('massage')) {
      return 'Our luxury spa offers traditional Himalayan treatments, Swedish massages, and holistic wellness therapies. Would you like to book a spa session?'
    }
    if (lowerInput.includes('restaurant') || lowerInput.includes('food') || lowerInput.includes('dining')) {
      return 'We have multiple dining options including our rooftop restaurant with Himalayan views, serving both local Nepali cuisine and international dishes.'
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! How can I assist you today with your travel plans to Nepal?'
    }
    
    return 'I\'d be happy to help! You can ask me about our rooms, amenities, tourist attractions in Nepal, or any other questions about your stay.'
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-luxury-gold rounded-full shadow-lg flex items-center justify-center hover:bg-luxury-goldLight transition-colors ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="text-luxury-dark" size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 w-96 bg-white dark:bg-luxury-darkSecondary rounded-2xl shadow-2xl overflow-hidden ${isMinimized ? 'h-16' : 'h-[500px]'}`}
          >
            {/* Header */}
            <div className="bg-luxury-gold p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-luxury-dark rounded-full flex items-center justify-center">
                  <Bot className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-luxury-dark">AI Assistant</h4>
                  <p className="text-xs text-luxury-dark/70">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-luxury-dark/10 rounded"
                >
                  <Minimize2 size={18} className="text-luxury-dark" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-luxury-dark/10 rounded"
                >
                  <X size={18} className="text-luxury-dark" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 h-[380px] overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-luxury-gold text-luxury-dark'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full outline-none focus:ring-2 focus:ring-luxury-gold"
                    />
                    <button
                      onClick={handleSend}
                      className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-goldLight transition-colors"
                    >
                      <Send size={18} className="text-luxury-dark" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot

