import './Footer.scss'
import Logo from '@/components/Logo'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Logo className="footer__logo" color="white" />
        <p>&copy;2025 Bakker Milan</p>
      </div>
    </footer>
  )
}
