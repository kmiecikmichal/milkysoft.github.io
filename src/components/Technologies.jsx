import { useEffect, useRef } from 'react'
import './Technologies.css'

const Technologies = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.capability-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const capabilities = [
    {
      title: 'Machine Learning',
      description: 'Models that learn from your data and get smarter over time',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'AI Agents',
      description: 'Autonomous systems that work around the clock',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, GCP - we deploy wherever you need',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Private AI',
      description: 'Your own AI models that never leave your servers',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Web3 & Blockchain',
      description: 'Smart contracts and decentralized apps',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'DevOps & MLOps',
      description: 'Automated pipelines that just work',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  return (
    <section className="technologies section" id="technologies" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tech we work with</h2>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="capability-card"
              data-index={index}
            >
              <div className="capability-background" style={{ background: capability.gradient }}></div>
              <div className="capability-content">
                <div className="capability-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
                <div className="capability-arrow">→</div>
              </div>
              <div className="capability-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
