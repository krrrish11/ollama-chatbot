# Ollama Chatbot - React App

A modern, beautiful React chatbot application that connects to Ollama's local LLM models.

## Features

✅ Real-time streaming responses
✅ Multiple model support (Llama 3.2, Mistral, Code Llama, etc.)
✅ Beautiful gradient UI with smooth animations
✅ Markdown support for formatted responses
✅ Code syntax highlighting
✅ Mobile responsive design
✅ Clear chat history
✅ Model switching on the fly

## Prerequisites

Before running this app, make sure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **Ollama** installed and running - [Download here](https://ollama.ai/)

## Installation

### Step 1: Install Ollama

```bash
# macOS/Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows
# Download from https://ollama.ai/download
```

### Step 2: Pull a Model

```bash
# Pull Llama 3.2 (default model)
ollama pull llama3.2

# Or pull other models
ollama pull llama3.2:1b
ollama pull llama3.2:3b
ollama pull mistral
ollama pull codellama
```

### Step 3: Start Ollama

```bash
ollama serve
```

This will start Ollama on `http://localhost:11434`

### Step 4: Install Project Dependencies

```bash
# Navigate to project directory
cd ollama-chatbot

# Install dependencies
npm install
```

## Running the App

```bash
npm run dev
```

The app will start on `http://localhost:3000`

## Project Structure

```
ollama-chatbot/
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx          # Main chat component
│   │   ├── ChatBot.css          # Chat styling
│   │   ├── Message.jsx          # Individual message component
│   │   └── Message.css          # Message styling
│   ├── hooks/
│   │   └── useOllama.jsx        # Custom hook for Ollama API
│   ├── utils/
│   │   └── ollamaAPI.js         # Ollama API client
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styling
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Usage

1. **Start a conversation**: Type your message in the input box
2. **Change models**: Click the ⚙️ Settings button and select a different model
3. **Clear chat**: Click the 🗑️ button to clear conversation history
4. **Streaming**: Responses stream in real-time with a blinking cursor indicator

## Available Models

The app supports any model you have pulled in Ollama:

- `llama3.2` - Latest Llama 3.2 model
- `llama3.2:1b` - Smaller 1B parameter version
- `llama3.2:3b` - 3B parameter version
- `llama3.1` - Llama 3.1
- `mistral` - Mistral model
- `codellama` - Optimized for code

To see all available models:
```bash
ollama list
```

## Troubleshooting

### Ollama Connection Error

If you see "Make sure Ollama is running on http://localhost:11434":

1. Check if Ollama is running:
   ```bash
   curl http://localhost:11434/api/tags
   ```

2. Start Ollama if not running:
   ```bash
   ollama serve
   ```

### CORS Issues

Ollama should handle CORS automatically. If you experience issues, set:

```bash
export OLLAMA_ORIGINS="http://localhost:3000"
ollama serve
```

### Model Not Found

Make sure you've pulled the model:
```bash
ollama pull llama3.2
```

## Customization

### Change Ollama URL

Edit `src/utils/ollamaAPI.js`:
```javascript
const OLLAMA_BASE_URL = 'http://your-ollama-server:11434'
```

### Add More Models

Edit `src/App.jsx` in the settings panel:
```javascript
<option value="your-model">Your Model</option>
```

### Styling

Modify CSS files in `src/components/` to customize colors, fonts, and layout.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Markdown** - Markdown rendering
- **Ollama API** - Local LLM inference

## License

MIT License - feel free to use this project however you'd like!

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## Support

If you encounter any issues:

1. Check that Ollama is running: `curl http://localhost:11434/api/tags`
2. Verify you have the model pulled: `ollama list`
3. Check browser console for errors
4. Make sure you're using Node.js v18 or higher

---

Made with ❤️ using React and Ollama
"# ollama-chatbot" 
