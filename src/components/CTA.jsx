import { useState } from 'react'
import './CTA.css'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setNotification({ type: 'error', message: 'Please enter a valid email address.' })
      setTimeout(() => {
        setNotification(null)
      }, 3000)
      return
    }

    setIsSubmitting(true)
    setNotification(null)

    try {
      const formData = new FormData()
      formData.append('access_key', '10a937ff-a425-42a9-91fa-1342a944e56e')
      formData.append('email', email)
      formData.append('subject', 'New Contact Form Submission from Landing Page')
      formData.append('from_name', 'MilkySoft Landing Page')
      formData.append('to_email', 'contact@milkysoft.io')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setNotification({ type: 'success', message: "Thank you! We'll be in touch soon." })
        setEmail('')
      } else {
        throw new Error(data.message || 'Failed to send email')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setNotification({ 
        type: 'error', 
        message: 'Failed to send email. Please try again later or contact us directly at contact@milkysoft.io' 
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  return (
    <section className="cta-section section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Let's talk</h2>
          <p className="cta-subtitle">Got a project? Drop us a line and we'll get back to you quickly</p>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="cta-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Get in Touch'}
            </button>
          </form>
        </div>
      </div>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}
    </section>
  )
}

export default CTA
