const OLLAMA_BASE_URL = 'http://localhost:11434'

export const ollamaAPI = {
  async chat(model, messages, onChunk) {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      const lines = chunk.split('\n').filter(line => line.trim())

      for (const line of lines) {
        try {
          const data = JSON.parse(line)
          if (data.message?.content) {
            onChunk(data.message.content)
          }
        } catch (e) {
          console.error('Error parsing chunk:', e)
        }
      }
    }
  },

  async listModels() {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  },

  async checkHealth() {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`)
      return response.ok
    } catch {
      return false
    }
  }
}
