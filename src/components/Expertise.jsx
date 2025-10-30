import { useEffect, useRef, useState } from 'react'
import './Expertise.css'

const Expertise = () => {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rows = entry.target.querySelectorAll('.project-row')
            rows.forEach((row, index) => {
              setTimeout(() => {
                row.classList.add('visible')
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

  const projects = [
    {
      stat: '60%',
      label: 'Faster hiring',
      title: 'AI Recruitment Platform',
      description: 'Automated CV screening and candidate matching. Cuts hiring time in half.'
    },
    {
      stat: '3x',
      label: 'Lead conversion',
      title: 'Sales Intelligence Bot',
      description: 'AI agent that finds leads, qualifies them, and writes personalized emails. Sales on autopilot.'
    },
    {
      stat: '10k+',
      label: 'Documents processed',
      title: 'Document Processing System',
      description: 'Extracts data from thousands of documents in multiple languages. Handles the boring paperwork.'
    },
    {
      stat: '100%',
      label: 'Data privacy',
      title: 'On-Premise LLM Integration',
      description: 'Custom LLM deployment running entirely on their infrastructure. Full control, zero external API calls.'
    }
  ]

  return (
    <section className="expertise section" id="expertise" ref={sectionRef}>
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">Recent work</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-row ${activeIndex === index ? 'active' : ''}`}
              data-index={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="project-stat-block">
                <div className="project-stat">{project.stat}</div>
                <div className="project-label">{project.label}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

