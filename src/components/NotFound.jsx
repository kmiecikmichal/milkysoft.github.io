import { Link } from 'react-router-dom'
import Footer from './Footer'
import { homePath, useLang } from '../i18n/lang'
import './NotFound.css'

const NotFound = () => {
  const { lang, t } = useLang()
  const copy = t.notFound

  return (
    <main className="notfound" id="main">
      <div className="container">
        <div className="notfound-content">
          <p className="notfound-code">404</p>
          <h1 className="notfound-title">{copy.title}</h1>
          <p className="notfound-text">{copy.text}</p>
          <Link to={homePath(lang)} className="notfound-link">
            {copy.link}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default NotFound
