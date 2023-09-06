import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ handleCartState }) => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-brand'>
        <img className='navbar-logo' src='/vite.svg' />
        <Link to='/' className='links'>
          <h1 className='navbar-title'>
            Epimovana
          </h1>
        </Link>
      </div>
      <div className='navbar-icons'>
        <img onClick={handleCartState} className='navbar-cart-icon' src='/cart.svg' />
      </div>

    </nav>
  )
}

export default Navbar
