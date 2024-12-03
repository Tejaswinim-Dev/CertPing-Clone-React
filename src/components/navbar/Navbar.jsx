import { Link } from "react-router-dom"
import "./Navbar.css"
import SignUp from "../login/SignUp"
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to={'/'}>
            <img src="https://certping.com/logo.svg" alt="" height="28px" width="28px"/>
            <span>CertPing</span>
        </Link>
      </div>

      <div className="nav-links">
        <Link to={'/whySsl'}>Why CertPing?</Link>
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#check">Check your Website</a>
      </div>

      <div className="nav-login">
        <Link to={'/login'}>Log in</Link>
        <Link to={'/signup'}><button className="signup">Get Started</button></Link>
      </div>
    </div>
  )
}

export default Navbar
