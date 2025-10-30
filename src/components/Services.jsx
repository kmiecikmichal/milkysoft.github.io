import { useState, useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 150)
            })
            observer.unobserve(entry.target)
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

  const services = [
    {
      icon: <span className="material-symbols-rounded">psychology</span>,
      title: 'AI Consulting',
      description: 'We help you figure out what AI can actually do for your business. No fluff, just practical advice.',
      features: ['Strategy that makes sense', 'Tech that fits your budget', 'Honest recommendations']
    },
    {
      icon: <span className="material-symbols-rounded">smart_toy</span>,
      title: 'AI Agents',
      description: 'Smart bots that do the boring stuff while you focus on what matters. They work 24/7 and never complain.',
      features: ['Automated workflows', 'Smart decision making', 'Always learning']
    },
    {
      icon: <span className="material-symbols-rounded">code</span>,
      title: 'Custom Development',
      description: 'Got a weird problem? We build custom solutions that fit exactly what you need.',
      features: ['Full-stack development', 'API integrations', 'Cloud deployment']
    },
    {
      icon: <span className="material-symbols-rounded">dns</span>,
      title: 'Backend Development',
      description: 'Scalable APIs and server infrastructure that can handle anything you throw at it.',
      features: ['Microservices', 'Database design', 'Performance optimization']
    },
    {
      icon: <span className="material-symbols-rounded">design_services</span>,
      title: 'Product Design',
      description: 'Beautiful interfaces that people actually want to use. Design that converts.',
      features: ['UI/UX design', 'Prototyping', 'User research']
    },
    {
      icon: <span className="material-symbols-rounded">trending_up</span>,
      title: 'Smart Growth',
      description: 'AI meets experimentation. Data meets momentum.',
      features: ['Analytics setup', 'A/B testing', 'Adaptive targeting']
    }
  ]

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we do</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
