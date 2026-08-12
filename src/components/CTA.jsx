import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CTA.css'

// Public by design - Web3Forms access keys are meant to ship in the client bundle.
// Abuse protection (captcha, domain allowlist, recipient address) is configured
// server-side in the Web3Forms dashboard, never here.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '10a937ff-a425-42a9-91fa-1342a944e56e'

// Client-side throttle. Not a security control (trivially bypassed), just a guard
// against double-clicks and accidental repeat submissions.
const RESUBMIT_COOLDOWN_MS = 15000
const REQUEST_TIMEOUT_MS = 15000

const CTA = () => {
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastSubmitAt, setLastSubmitAt] = useState(0)

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const notify = (type, message, ms = 5000) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), ms)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    // Honeypot: real users never see this field, bots fill everything in.
    if (e.target.botcheck?.checked) return

    if (!validateEmail(email)) {
      notify('error', 'Please enter a valid email address.', 3000)
      return
    }

    const sinceLast = Date.now() - lastSubmitAt
    if (lastSubmitAt && sinceLast < RESUBMIT_COOLDOWN_MS) {
      notify('error', `Please wait a moment before sending again.`, 3000)
      return
    }

    setIsSubmitting(true)
    setNotification(null)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('email', email.trim())
      formData.append('subject', 'New Contact Form Submission from Landing Page')
      formData.append('from_name', 'Milkysoft Landing Page')
      formData.append('botcheck', '')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        signal: controller.signal
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.success) {
        throw new Error(data.message || `Request failed with status ${response.status}`)
      }

      setLastSubmitAt(Date.now())
      setEmail('')
      notify('success', "Thank you! We'll be in touch soon.")
    } catch (error) {
      console.error('Error submitting form:', error)
      notify(
        'error',
        'Failed to send email. Please try again later or contact us directly at contact@milkysoft.io'
      )
    } finally {
      clearTimeout(timeout)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="cta-section section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Let&apos;s talk</h2>
          <p className="cta-subtitle">Got a project? Drop us a line and we&apos;ll get back to you quickly</p>
          <form className="cta-form" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="cta-email">
              Your email address
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />

            {/* Honeypot - hidden from users and assistive tech, visible to bots. */}
            <label className="honeypot" aria-hidden="true">
              Do not fill this out
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
            </label>

            <button type="submit" className="cta-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Get in Touch'}
            </button>
          </form>
          <p className="cta-consent">
            By submitting your email you agree that Milkysoft may use it to reply to your
            enquiry. See our <Link to="/privacy-policy">Privacy Policy</Link> for details on
            how we handle your data.
          </p>
        </div>
      </div>

      <div className="notification-region" role="status" aria-live="polite">
        {notification && (
          <div className={`notification notification-${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  )
}

export default CTA
