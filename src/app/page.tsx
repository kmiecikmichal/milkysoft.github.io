'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData();
    formData.append('access_key', '10a937ff-a425-42a9-91fa-1342a944e56e');
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', 'New Contact Form Submission');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Response from Web3Forms:', data);

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!',
        });
        setEmail('');
        setMessage('');
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus.type === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-blue)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 sm:mb-6 font-['Sao_Torpes']" style={{ color: 'var(--color-beige)' }}>
            MilkySoft
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-beige)' }}>
            Crafting digital experiences that blend creativity with functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a 
              href="#contact" 
              className="group px-8 py-4 rounded-full transition-all duration-300 text-base sm:text-lg"
              style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-beige)', border: 'none', boxShadow: '0 2px 8px var(--color-indigo)33' }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--color-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--color-light-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="group px-8 py-4 rounded-full border-2 transition-all duration-300 text-base sm:text-lg"
              style={{ borderColor: 'var(--color-light-indigo)', color: 'var(--color-beige)', backgroundColor: 'transparent' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-light-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-32 relative" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-beige)', fontFamily: 'Sao Torpes', borderBottom: '4px solid var(--color-light-indigo)', display: 'inline-block', paddingBottom: '0.25em' }}>
              Why choose MilkySoft?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-beige)' }}>
              We combine cutting-edge technology with innovative design to create exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-blue)', border: 'none', boxShadow: '0 2px 8px var(--color-light-indigo)33' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-beige)', border: 'none', display: 'inline-block', paddingBottom: '0.1em' }}>Modern Technology</h3>
              <p style={{ color: 'var(--color-beige)' }}>
                Built with the latest web technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="group p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-blue)', border: 'none', boxShadow: '0 2px 8px var(--color-light-indigo)33' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-beige)', border: 'none', display: 'inline-block', paddingBottom: '0.1em' }}>Scalable Solutions</h3>
              <p style={{ color: 'var(--color-beige)' }}>
                Our products grow with your business, ensuring long-term success.
              </p>
            </div>
            <div className="group p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-blue)', border: 'none', boxShadow: '0 2px 8px var(--color-light-indigo)33' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-beige)', border: 'none', display: 'inline-block', paddingBottom: '0.1em' }}>Expert Support</h3>
              <p style={{ color: 'var(--color-beige)' }}>
                Dedicated team of professionals ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-beige)', fontFamily: 'Sao Torpes', borderBottom: '4px solid var(--color-light-indigo)', display: 'inline-block', paddingBottom: '0.25em' }}>
              Get in Touch
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-beige)' }}>
              Ready to start your journey with us? Drop us a message and let's create something amazing together.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-beige)' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ backgroundColor: 'var(--color-beige)', color: 'var(--color-indigo)', border: 'none' }}
                  className="w-full px-6 py-4 rounded-xl"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-beige)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  style={{ backgroundColor: 'var(--color-beige)', color: 'var(--color-indigo)', border: 'none' }}
                  className="w-full px-6 py-4 rounded-xl"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl transition-all duration-200"
                style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-beige)', border: 'none', boxShadow: '0 2px 8px var(--color-indigo)33' }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--color-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--color-light-indigo)'; e.currentTarget.style.color = 'var(--color-beige)'; }}
                disabled={isSubmitting || submitStatus.type === 'success'}
              >
                {submitStatus.type === 'success' ? 'Message sent successfully!' : isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-light-indigo)', color: 'var(--color-beige)' }} className="py-20 text-center">
        <div className="container flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-beige)', fontFamily: 'Sao Torpes', display: 'inline-block', paddingBottom: '0.1em' }}>MilkySoft</h3>
              <p style={{ color: 'var(--color-beige)' }}>
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-beige)', fontFamily: 'Sao Torpes', display: 'inline-block', paddingBottom: '0.1em' }}>Contact</h3>
              <p style={{ color: 'var(--color-beige)' }}>
                Email: contact@milkysoft.io
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-beige)', fontFamily: 'Sao Torpes', display: 'inline-block', paddingBottom: '0.1em' }}>Follow Us</h3>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/company/milkysoft" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-beige)' }} className="transition-colors duration-300 text-lg font-light">LinkedIn</a>
                <a href="https://www.instagram.com/milkysoft_io?igsh=cWs0dWs5NGJ6dmR5&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-beige)' }} className="transition-colors duration-300 text-lg font-light">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center" style={{ color: 'var(--color-beige)' }}>
            <p>&copy; {new Date().getFullYear()} MilkySoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
