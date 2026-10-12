import { Link } from 'react-router-dom'
import { usePostErrand } from '../../hooks/usePostErrand'
import './Footer.css'

export default function Footer() {
  const { handlePostErrand, ProfileIncompleteModal } = usePostErrand()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/DFY.png" alt="" style={{ height: 28, width: 'auto', marginRight: '0.375rem' }} />
            <span className="brand-text">DoForYou</span><span className="dot"><b>.</b></span>
          </Link>
          <p>A South African task marketplace for getting everyday jobs done and creating local earning opportunities.</p>
          <div className="social-links">
            <a href="https://x.com/JoinDoForYou" target="_blank" rel="noreferrer" aria-label="X"><i className="fab fa-twitter" /></a>
            <a href="https://web.facebook.com/joinDoForYou/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href="https://www.instagram.com/joindoforyou/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://www.linkedin.com/company/do-for-you/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            <a href="https://www.tiktok.com/@doforyoufreelance" target="_blank" rel="noreferrer" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div><h3>Get started</h3><ul>
            <li><Link to="/tasks/browse">Browse tasks</Link></li>
            <li><Link to="/for-creators">Post a task</Link></li>
            <li><Link to="/for-runners">Become a runner</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
          </ul></div>
          <div><h3>Learn & support</h3><ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/payments-and-completion">Payments & completion</Link></li>
            <li><Link to="/about">About DoForYou</Link></li>
            <li><Link to="/contact">Contact support</Link></li>
          </ul></div>
          <div><h3>Policies & contact</h3><ul>
            <li><Link to="/terms">Terms of service</Link></li>
            <li><a href="mailto:info@doforyou.co.za?subject=Privacy%20enquiry">Privacy enquiries</a></li>
            <li><a href="mailto:info@doforyou.co.za?subject=Cookie%20enquiry">Cookie enquiries</a></li>
            <li><a href="https://wa.me/27795258611" target="_blank" rel="noreferrer">WhatsApp: +27 79 525 8611</a></li>
            <li><a href="mailto:info@doforyou.co.za">info@doforyou.co.za</a></li>
          </ul></div>
        </div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom-inner">
        <span>&copy; {year} DoForYou. All rights reserved.</span>
        <span>Made in South Africa</span>
      </div></div>
      {ProfileIncompleteModal}
    </footer>
  )
}