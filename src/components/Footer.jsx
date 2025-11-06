import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/Milkysoft_logo_new.svg'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="MilkySoft" className="footer-logo-image" />
            <p className="footer-tagline">We code, you profit</p>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a onClick={() => scrollToSection('services')}>AI Consulting</a></li>
              <li><a onClick={() => scrollToSection('services')}>Agentic Systems</a></li>
              <li><a onClick={() => scrollToSection('services')}>Custom Development</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a onClick={() => scrollToSection('expertise')}>Expertise</a></li>
              <li><a onClick={() => scrollToSection('technologies')}>Technologies</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.linkedin.com/company/milkysoft" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="https://www.instagram.com/milkysoft_io?igsh=cWs0dWs5NGJ6dmR5&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 MilkySoft. All rights reserved.{' '}
            <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
