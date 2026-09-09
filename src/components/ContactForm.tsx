import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    if (!String(payload.name).trim() || !String(payload.message).trim()) {
      setError('Inserisci il tuo nome e una breve descrizione della richiesta.')
      setStatus('error')
      return
    }
    submitting.current = true
    setStatus('sending')
    setError('')
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload), signal: controller.signal,
      })
      const result = await response.json()
      if (!response.ok || result.success !== true) throw new Error('Invio non riuscito')
      form.reset()
      setStatus('success')
    } catch {
      setError('La richiesta non è stata inviata. Riprova oppure chiama il 339 179 7616.')
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
      submitting.current = false
    }
  }

  if (status === 'success') return <div className="form-success" role="status">
    <CheckCircle2 size={36} aria-hidden="true" />
    <h3>Richiesta inviata.</h3>
    <p>Grazie per averci scritto. Ti ricontatteremo ai recapiti che hai lasciato.</p>
  </div>

  return <form className="contact-form" onSubmit={submit} aria-label="Lascia una richiesta" aria-busy={status === 'sending'}>
    <div className="form-row">
      <label>Nome <input name="name" autoComplete="name" required maxLength={100} placeholder="Il tuo nome" /></label>
      <label>Email <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nome@azienda.it" /></label>
    </div>
    <div className="form-row">
      <label>Telefono <span className="optional">(facoltativo)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="Il tuo numero" /></label>
      <label>Servizio <span className="optional">(facoltativo)</span><select name="service" defaultValue="">
        <option value="">Seleziona un servizio</option>
        <option>Sviluppo web</option><option>Gestione campagne ads</option><option>Sviluppo strumenti AI</option>
      </select></label>
    </div>
    <label>La tua richiesta <textarea name="message" rows={4} required maxLength={5000} placeholder="Raccontaci cosa ti serve e per quale attività." /></label>
    <div className="form-trap" aria-hidden="true"><label>Sito aziendale<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="privacy-check"><input name="privacy" type="checkbox" value="accepted" required /><span>Ho letto l’<a href="/privacy" target="_blank" rel="noopener noreferrer">informativa privacy<span className="sr-only"> (si apre in una nuova scheda)</span></a> sul trattamento dei dati per rispondere alla mia richiesta.</span></label>
    {status === 'error' && <p className="form-error" role="alert">{error}</p>}
    <button className="btn-primary inline-flex items-center justify-center gap-3" type="submit" disabled={status === 'sending'}>
      {status === 'sending' ? <>Invio in corso <LoaderCircle className="spinner" size={18} aria-hidden="true" /></> : <>Invia la richiesta <ArrowUpRight size={18} aria-hidden="true" /></>}
    </button>
  </form>
}
