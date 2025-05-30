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
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-white)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6" style={{ color: 'var(--color-grey)', letterSpacing: '0.1em' }}>
            MILKYSOFT
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-grey)' }}>
            Building pixel-perfect digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a 
              href="#contact" 
              className="group px-8 py-4 transition-all duration-300 text-base sm:text-lg"
              style={{ 
                backgroundColor: 'var(--color-orange)', 
                color: 'var(--color-white)', 
                border: '4px solid var(--color-grey)',
                boxShadow: '4px 4px 0 var(--color-grey)',
                transform: 'translate(-2px, -2px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
              }}
              onMouseOver={e => { 
                e.currentTarget.style.backgroundColor = 'var(--color-grey-light)';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseOut={e => { 
                e.currentTarget.style.backgroundColor = 'var(--color-orange)';
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-grey)';
              }}
            >
              GET STARTED
            </a>
            <a 
              href="#about" 
              className="group px-8 py-4 transition-all duration-300 text-base sm:text-lg"
              style={{ 
                border: '4px solid var(--color-grey)', 
                color: 'var(--color-grey)', 
                backgroundColor: 'transparent',
                boxShadow: '4px 4px 0 var(--color-grey)',
                transform: 'translate(-2px, -2px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
              }}
              onMouseOver={e => { 
                e.currentTarget.style.borderColor = 'var(--color-grey-light)';
                e.currentTarget.style.color = 'var(--color-grey-light)';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseOut={e => { 
                e.currentTarget.style.borderColor = 'var(--color-grey)';
                e.currentTarget.style.color = 'var(--color-grey)';
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-grey)';
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-32 relative" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-grey)', borderBottom: '4px solid var(--color-orange)', display: 'inline-block', paddingBottom: '0.25em' }}>
              WHY CHOOSE MILKYSOFT?
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--color-grey)' }}>
              We combine cutting-edge technology with innovative design to create exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey-light)', 
              color: 'var(--color-grey)', 
              border: '4px solid var(--color-grey)',
              boxShadow: '4px 4px 0 var(--color-grey)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
            }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-grey)' }}>MODERN TECHNOLOGY</h3>
              <p style={{ color: 'var(--color-grey)' }}>
                Built with the latest web technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="group p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey-light)', 
              color: 'var(--color-grey)', 
              border: '4px solid var(--color-grey)',
              boxShadow: '4px 4px 0 var(--color-grey)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
            }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-grey)' }}>SCALABLE SOLUTIONS</h3>
              <p style={{ color: 'var(--color-grey)' }}>
                Our products grow with your business, ensuring long-term success.
              </p>
            </div>
            <div className="group p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey-light)', 
              color: 'var(--color-grey)', 
              border: '4px solid var(--color-grey)',
              boxShadow: '4px 4px 0 var(--color-grey)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
            }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-grey)' }}>EXPERT SUPPORT</h3>
              <p style={{ color: 'var(--color-grey)' }}>
                Dedicated team of professionals ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-grey)', borderBottom: '4px solid var(--color-orange)', display: 'inline-block', paddingBottom: '0.25em' }}>
              GET IN TOUCH
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--color-grey)' }}>
              Ready to start your journey with us? Drop us a message and let's create something amazing together.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-grey)' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: 'var(--color-grey)', 
                    border: '4px solid var(--color-grey)',
                    boxShadow: '4px 4px 0 var(--color-grey)',
                    transform: 'translate(-2px, -2px)',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                  }}
                  className="w-full px-6 py-4"
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-grey)' }}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: 'var(--color-grey)', 
                    border: '4px solid var(--color-grey)',
                    boxShadow: '4px 4px 0 var(--color-grey)',
                    transform: 'translate(-2px, -2px)',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                  }}
                  className="w-full px-6 py-4"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 transition-all duration-200"
                style={{ 
                  backgroundColor: 'var(--color-orange)', 
                  color: 'var(--color-white)', 
                  border: '4px solid var(--color-grey)',
                  boxShadow: '4px 4px 0 var(--color-grey)',
                  transform: 'translate(-2px, -2px)',
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                }}
                onMouseOver={e => { 
                  e.currentTarget.style.backgroundColor = 'var(--color-grey-light)';
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onMouseOut={e => { 
                  e.currentTarget.style.backgroundColor = 'var(--color-orange)';
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-grey)';
                }}
                disabled={isSubmitting || submitStatus.type === 'success'}
              >
                {submitStatus.type === 'success' ? 'MESSAGE SENT!' : isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-grey-light)', color: 'var(--color-grey)' }} className="py-20 text-center">
        <div className="container flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-grey)', display: 'inline-block', paddingBottom: '0.1em' }}>MILKYSOFT</h3>
              <p style={{ color: 'var(--color-grey)' }}>
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-grey)', display: 'inline-block', paddingBottom: '0.1em' }}>CONTACT</h3>
              <p style={{ color: 'var(--color-grey)' }}>
                Email: contact@milkysoft.io
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: 'var(--color-grey)', display: 'inline-block', paddingBottom: '0.1em' }}>FOLLOW US</h3>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/company/milkysoft" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-grey)' }} className="transition-colors duration-300 text-lg font-light">LinkedIn</a>
                <a href="https://www.instagram.com/milkysoft_io?igsh=cWs0dWs5NGJ6dmR5&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-grey)' }} className="transition-colors duration-300 text-lg font-light">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center" style={{ color: 'var(--color-grey)' }}>
            <p>&copy; {new Date().getFullYear()} MilkySoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
