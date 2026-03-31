'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, X, Send, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SupportAssistant() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  
  // WhatsApp number for support
  const whatsappNumber = '254110952788' // Format: country code + number without + or spaces
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message)
      // Create WhatsApp URL with the message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')
      // Reset the message and close the panel
      setMessage('')
      setIsChatOpen(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 md:w-96"
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-0">
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <h3 className="font-semibold">WhatsApp Support</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsChatOpen(false)}
                      className="hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Type your message below and we'll open WhatsApp to continue the conversation.
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-navy hover:bg-navy/90"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <ExternalLink className="h-4 w-4" />
                      <span>This will open WhatsApp in a new tab</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="relative w-14 h-14 rounded-full shadow-lg bg-mesh-card border border-navy/10 flex items-center justify-center hover:scale-105 transition-transform duration-300"
      >
        {isChatOpen ? (
          <X className="h-5 w-5 text-navy" />
        ) : (
          <MessageSquare className="h-5 w-5 text-navy" />
        )}
      </button>
    </div>
  )
} 