import { useState } from 'react'
import { requestDemo } from '@/services/contact.js'

/**
 * useContactForm — Encapsula estado y lógica del formulario de demo.
 * Mantiene los componentes UI limpios de lógica de negocio.
 */
export function useContactForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e?.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor ingresa un email válido.')
      return
    }
    setStatus('loading')
    try {
      const result = await requestDemo(email)
      if (result.success) {
        setStatus('success')
        setMessage('¡Listo! Te contactaremos pronto.')
        setEmail('')
      } else {
        throw new Error(result.message)
      }
    } catch (_err) {
      setStatus('error')
      setMessage('Algo salió mal. Intenta nuevamente.')
      console.error('Error en requestDemo:', _err)
    }
  }

  return { email, setEmail, status, message, handleSubmit }
}
