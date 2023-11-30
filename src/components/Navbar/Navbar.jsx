import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../theme-context/theme-context';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  document.documentElement.setAttribute('scheme', theme);
  window.localStorage.setItem('theme', theme);

  function handleThemeState() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const themeIcon = {
    light: '/sun.svg',
    dark: '/moon.svg',
  };

  return (
    <nav className='navbar-container'>
      <div className='navbar-brand'>
        <img className='navbar-logo' src='/vite.svg' />
        <Link to='/' className='links'>
          <h1 className='navbar-title'>Epimovana</h1>
        </Link>
      </div>
      <div className='navbar-icons'>
        <Link to='/productos/checkout'>
          <img className='navbar-cart-icon' src='/cart.svg' />
        </Link>
        <img
          onClick={handleThemeState}
          className='navbar-cart-icon'
          src={theme === 'light' ? themeIcon.light : themeIcon.dark}
        />
      </div>
    </nav>
  );
};

export default Navbar;
