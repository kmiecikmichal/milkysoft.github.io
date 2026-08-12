import { Link } from 'react-router-dom'
import Footer from './Footer'
import './NotFound.css'

const NotFound = () => {
  return (
    <main className="notfound" id="main">
      <div className="container">
        <div className="notfound-content">
          <p className="notfound-code">404</p>
          <h1 className="notfound-title">Page not found</h1>
          <p className="notfound-text">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link to="/" className="notfound-link">
            Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default NotFound
