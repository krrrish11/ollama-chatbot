import { useState } from 'react'
import { ollamaAPI } from '../utils/ollamaAPI'

export function useOllama(model) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendMessage = async (messages, onChunk) => {
    setLoading(true)
    setError(null)

    try {
      await ollamaAPI.chat(model, messages, onChunk)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { sendMessage, loading, error }
}
