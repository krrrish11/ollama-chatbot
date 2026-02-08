import { useState, useRef, useEffect } from 'react'
import { useOllama } from '../hooks/useOllama'
import Message from './Message'
import './ChatBot.css'

function ChatBot({ model }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const { sendMessage, loading, error } = useOllama(model)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Add placeholder for assistant message
    const assistantMessageIndex = messages.length + 1
    setMessages(prev => [...prev, { role: 'assistant', content: '', isStreaming: true }])

    try {
      await sendMessage([...messages, userMessage], (chunk) => {
        setMessages(prev => {
          const newMessages = [...prev]
          newMessages[assistantMessageIndex] = {
            role: 'assistant',
            content: (newMessages[assistantMessageIndex]?.content || '') + chunk,
            isStreaming: true
          }
          return newMessages
        })
      })

      // Mark streaming as complete
      setMessages(prev => {
        const newMessages = [...prev]
        newMessages[assistantMessageIndex] = {
          ...newMessages[assistantMessageIndex],
          isStreaming: false
        }
        return newMessages
      })
    } catch (err) {
      console.error('Error sending message:', err)
      setMessages(prev => prev.slice(0, -1)) // Remove placeholder on error
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  return (
    <div className="chatbot">
      <div className="chat-container">
        <div className="messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <h2>Welcome to Ollama Chatbot!</h2>
              <p>Start a conversation with {model}</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <Message key={idx} message={msg} />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="error-message">
            ❌ Error: {error}. Make sure Ollama is running on http://localhost:11434
          </div>
        )}

        <div className="input-area">
          <div className="input-wrapper">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... (Shift+Enter for new line)"
              disabled={loading}
              rows={1}
            />
            <div className="button-group">
              <button 
                onClick={clearChat} 
                className="clear-btn"
                disabled={messages.length === 0}
              >
                🗑️
              </button>
              <button 
                onClick={handleSend} 
                className="send-btn"
                disabled={loading || !input.trim()}
              >
                {loading ? '⏳' : '📤'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
