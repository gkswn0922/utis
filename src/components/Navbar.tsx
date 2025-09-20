import { Link, NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'

export function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand">UTIS</Link>
        <nav className="nav__menu">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>홈</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>상품</NavLink>
        </nav>
        <div className="nav__search">
          <input
            aria-label="목적지 검색"
            placeholder="도시, 장소, 액티비티 검색"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/products')
              }
            }}
          />
        </div>
      </div>
    </header>
  )
}


