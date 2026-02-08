import ReactMarkdown from 'react-markdown'
import './Message.css'

function Message({ message }) {
  const { role, content, isStreaming } = message

  return (
    <div className={`message ${role}`}>
      <div className="message-avatar">
        {role === 'user' ? '👤' : '🤖'}
      </div>
      <div className="message-content">
        <div className="message-role">{role === 'user' ? 'You' : 'AI'}</div>
        <div className="message-text">
          <ReactMarkdown>{content}</ReactMarkdown>
          {isStreaming && <span className="cursor">▊</span>}
        </div>
      </div>
    </div>
  )
}

export default Message
