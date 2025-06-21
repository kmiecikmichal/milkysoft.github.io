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
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-grey)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12" style={{ backgroundColor: 'var(--color-grey)' }}>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto text-center px-3 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-3 sm:mb-4 md:mb-6" style={{ color: 'var(--color-white)', letterSpacing: 'letter-spacing-md' }}>
            MILKYSOFT
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2" style={{ color: 'var(--color-white)' }}>
            Building pixel-perfect digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto px-4 sm:px-0">
            <a 
              href="#contact" 
              className="group px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium"
              style={{ 
                backgroundColor: 'var(--color-orange)', 
                color: 'var(--color-white)', 
                border: '3px solid var(--color-orange)',
                transform: 'translate(-2px, -2px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
              }}
              onMouseOver={e => { 
                e.currentTarget.style.borderColor = 'var(--color-grey-light)';
                e.currentTarget.style.backgroundColor = 'var(--color-grey-light)';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseOut={e => { 
                e.currentTarget.style.borderColor = 'var(--color-orange)';
                e.currentTarget.style.backgroundColor = 'var(--color-orange)';
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-grey)';
              }}
            >
              GET STARTED
            </a>
            <a 
              href="#about" 
              className="group px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium"
              style={{ 
                border: '3px solid var(--color-white)', 
                color: 'var(--color-white)', 
                backgroundColor: 'transparent',
                transform: 'translate(-2px, -2px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
              }}
              onMouseOver={e => { 
                e.currentTarget.style.borderColor = 'var(--color-grey-light)';
                e.currentTarget.style.color = 'var(--color-grey-light)';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseOut={e => { 
                e.currentTarget.style.borderColor = 'var(--color-white)';
                e.currentTarget.style.color = 'var(--color-white)';
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
      <section id="about" className="py-16 sm:py-24 md:py-32 relative" style={{ backgroundColor: 'var(--color-grey)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 px-2" style={{ 
              color: 'var(--color-white)', 
              borderBottom: '3px solid var(--color-orange)', 
              display: 'inline-block', 
              paddingBottom: '0.25em' 
              }}>
              WHY CHOOSE MILKYSOFT?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group p-6 sm:p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey)', 
              color: 'var(--color-white)', 
              border: '3px solid var(--color-white)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
            }}
            onMouseOver={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-grey)';
              e.currentTarget.style.backgroundColor = 'var(--color-white)';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
            onMouseOut={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.backgroundColor= 'var(--color-grey)';
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3" style={{ color: 'var(--color-orange)' }}>MODERN TECHNOLOGY</h3>
              <p className="text-sm sm:text-base">
                Built with the latest web technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="group p-6 sm:p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey)', 
              color: 'var(--color-white)', 
              border: '3px solid var(--color-white)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
            }}
            onMouseOver={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-grey)';
              e.currentTarget.style.backgroundColor = 'var(--color-white)';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
            onMouseOut={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.backgroundColor= 'var(--color-grey)';
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3" style={{ color: 'var(--color-orange)' }}>SCALABLE SOLUTIONS</h3>
              <p className="text-sm sm:text-base">
                Our products grow with your business, ensuring long-term success.
              </p>
            </div>
            <div className="group p-6 sm:p-8 transition-all duration-300" style={{ 
              backgroundColor: 'var(--color-grey)', 
              color: 'var(--color-white)', 
              border: '3px solid var(--color-white)',
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
            }}
            onMouseOver={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-grey)';
              e.currentTarget.style.backgroundColor = 'var(--color-white)';
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
            onMouseOut={e => { 
              e.currentTarget.style.borderColor = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.backgroundColor= 'var(--color-grey)';
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3" style={{ color: 'var(--color-orange)' }}>EXPERT SUPPORT</h3>
              <p className="text-sm sm:text-base">
                Dedicated team of professionals ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32 relative" style={{ backgroundColor: 'var(--color-grey)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 px-2" style={{ 
              color: 'var(--color-white)', 
              borderBottom: '3px solid var(--color-orange)', 
              display: 'inline-block', 
              paddingBottom: '0.25em' }}>
              GET IN TOUCH
            </h2>
            <p className="text-sm sm:text-base max-w-2xl mx-auto px-2" style={{ color: 'var(--color-white)' }}>
              Ready to start your journey with us? Drop us a message and let's create something amazing together.
            </p>
          </div>
          <div className="max-w-xl mx-auto px-4 sm:px-0">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base mb-2" style={{ color: 'var(--color-white)' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ 
                    backgroundColor: 'var(--color-grey)', 
                    color: 'var(--color-white)', 
                    border: '3px solid var(--color-white)',
                    transform: 'translate(-2px, -2px)',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
                  }}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base mb-2" style={{ color: 'var(--color-white)' }}>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  style={{ 
                    backgroundColor: 'var(--color-grey)', 
                    color: 'var(--color-white)', 
                    border: '3px solid var(--color-white)',
                    transform: 'translate(-2px, -2px)',
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
                  }}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: 'var(--color-orange)', 
                  color: 'var(--color-white)', 
                  border: '3px solid var(--color-orange)',
                  transform: 'translate(-2px, -2px)',
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
                }}
                onMouseOver={e => { 
                  if (!isSubmitting) {
                    e.currentTarget.style.borderColor = 'var(--color-grey-light)';
                    e.currentTarget.style.backgroundColor = 'var(--color-grey-light)';
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
                onMouseOut={e => { 
                  if (!isSubmitting) {
                    e.currentTarget.style.borderColor = 'var(--color-orange)';
                    e.currentTarget.style.backgroundColor = 'var(--color-orange)';
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-grey)';
                  }
                }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
            
            {submitStatus.type && (
              <div className={`mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-grey)', color: 'var(--color-white)' }} className="py-20 text-center">
        <div className="container flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            <div>
              <h3 className="text-3xl mb-6 tracking-tight" style={{ 
                color: 'var(--color-white)', 
                display: 'inline-block', 
                paddingBottom: '0.1em' }}>MILKYSOFT</h3>
              <p style={{ color: 'var(--color-white)' }}>
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-3xl mb-6 tracking-tight" style={{ 
                color: 'var(--color-white)', 
                display: 'inline-block', 
                paddingBottom: '0.1em' 
                }}>CONTACT</h3>
              <p style={{ color: 'var(--color-white)' }}>
                Email: contact@milkysoft.io
              </p>
            </div>
            <div>
              <h3 className="text-3xl mb-6 tracking-tight" style={{ 
                color: 'var(--color-white)', 
                display: 'inline-block', 
                paddingBottom: '0.1em' }}>FOLLOW US</h3>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/company/milkysoft" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)' }} className="transition-colors duration-300 text-lg">LinkedIn</a>
                <a href="https://www.instagram.com/milkysoft_io?igsh=cWs0dWs5NGJ6dmR5&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)' }} className="transition-colors duration-300 text-lg">Instagram</a>
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
