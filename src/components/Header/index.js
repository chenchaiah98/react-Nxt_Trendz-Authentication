// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <div className="menu-list-container">
      <ul className="menu-list">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/Products">Products</Link>
        </li>
        <li className="list-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="list-item">
          <Link to="/login" className="header-btn">
            logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
