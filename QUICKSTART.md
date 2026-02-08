# 🚀 Quick Start Guide

## Get Up and Running in 3 Steps

### 1️⃣ Install Ollama and Pull Model

```bash
# Install Ollama (if not already installed)
# Visit: https://ollama.ai/download

# Pull Llama 3.2 model
ollama pull llama3.2

# Start Ollama server
ollama serve
```

Keep this terminal running!

### 2️⃣ Install Dependencies

Open a NEW terminal:

```bash
cd ollama-chatbot
npm install
```

### 3️⃣ Run the App

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

---

## 🎯 Features

✨ **Real-time streaming** - Watch responses appear word by word
🎨 **Beautiful UI** - Modern gradient design with smooth animations
🔄 **Multiple models** - Switch between Llama 3.2, Mistral, CodeLlama
📝 **Markdown support** - Code blocks, lists, and formatting
📱 **Responsive** - Works on desktop, tablet, and mobile
🗑️ **Clear history** - Start fresh anytime

---

## 📁 Project Structure

```
ollama-chatbot/
├── src/
│   ├── components/       # React components
│   │   ├── ChatBot.jsx   # Main chat interface
│   │   └── Message.jsx   # Message bubbles
│   ├── hooks/
│   │   └── useOllama.jsx # Ollama API hook
│   ├── utils/
│   │   └── ollamaAPI.js  # API client
│   └── App.jsx           # Root component
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Troubleshooting

**Connection Error?**
- Make sure `ollama serve` is running
- Test: `curl http://localhost:11434/api/tags`

**Model Not Found?**
- Pull the model: `ollama pull llama3.2`
- Check available: `ollama list`

**Port 3000 in use?**
- Edit `vite.config.js` and change the port

---

## 🎨 Customization

**Change colors:** Edit `src/App.css` and component CSS files
**Add models:** Edit `src/App.jsx` settings dropdown
**Change Ollama URL:** Edit `src/utils/ollamaAPI.js`

---

## 📚 Resources

- [Ollama Documentation](https://github.com/ollama/ollama)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

---

**Enjoy chatting with your local AI! 🤖**
