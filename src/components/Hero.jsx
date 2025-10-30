import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const phrases = ['build', 'drive', 'scale', 'know']
  const carouselColors = ['#CF6C58', '#3079B5', '#F8CC45']
  const hexToRgba = (hex, alpha) => {
    const h = hex.replace('#', '')
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
    const bigint = parseInt(full, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  const [phraseIndex, setPhraseIndex] = useState(0)
  const scrollSpaceRef = useRef(null)
  const tickingRef = useRef(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      window.requestAnimationFrame(() => {
        const scrollSpace = scrollSpaceRef.current
        if (!scrollSpace) {
          tickingRef.current = false
          return
        }
        const rect = scrollSpace.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const totalScrollable = scrollSpace.offsetHeight - viewportHeight
        const passed = Math.min(Math.max(-rect.top, 0), totalScrollable)
        const progress = totalScrollable > 0 ? passed / totalScrollable : 0
        const nextIndex = Math.min(
          phrases.length - 1,
          Math.floor(progress * phrases.length)
        )
        if (nextIndex !== phraseIndex) {
          setPhraseIndex(nextIndex)
        }
        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [phraseIndex])

  return (
    <section className="hero">
      {/* sticky scroll space for carousel */}
      <div className="hero-scroll-space" ref={scrollSpaceRef}>
        <div className="hero-sticky">
          <div className="container">
            <div
              className="hero-content"
              style={{
                '--hero-accent': carouselColors[phraseIndex % carouselColors.length],
                '--hero-accent-rgba': hexToRgba(carouselColors[phraseIndex % carouselColors.length], 0.35)
              }}
            >
              <h1 className="hero-title">
                <span className="title-fixed">We</span>
                <span className="carousel-slot">
                  <span
                    className="carousel-word"
                    key={phraseIndex}
                    style={{ color: carouselColors[phraseIndex % carouselColors.length] }}
                  >
                    {phrases[phraseIndex]}
                  </span>
                </span>
                <span className="title-fixed">AI</span>
              </h1>
              <p className="hero-subtitle">
                Reliable AI solutions for real business problems.
                <br />
                <span className="highlight-text">We code, you profit.</span>
              </p>
              <div className="hero-cta">
                <button className="cta-btn-primary magnetic-btn" onClick={() => scrollToSection('contact')}>
                  <span>Let's Talk</span>
                  <div className="btn-shine"></div>
                </button>
                <button className="cta-btn-secondary magnetic-btn" onClick={() => scrollToSection('expertise')}>
                  <span>Our Work →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
