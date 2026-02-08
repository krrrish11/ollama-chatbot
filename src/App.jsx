import { useState } from 'react'
import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  const [model, setModel] = useState('llama3.2')
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🦙 Ollama Chatbot</h1>
        <button 
          className="settings-btn"
          onClick={() => setShowSettings(!showSettings)}
        >
          ⚙️ Settings
        </button>
      </header>

      {showSettings && (
        <div className="settings-panel">
          <label>
            Model:
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="llama3.2">Llama 3.2</option>
              <option value="llama3.2:1b">Llama 3.2 1B</option>
              <option value="llama3.2:3b">Llama 3.2 3B</option>
              <option value="llama3.1">Llama 3.1</option>
              <option value="mistral">Mistral</option>
              <option value="codellama">Code Llama</option>
            </select>
          </label>
        </div>
      )}

      <ChatBot model={model} />
    </div>
  )
}

export default App
