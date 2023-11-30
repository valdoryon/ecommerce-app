import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartPage from './components/CartPage/CartPage';
import { ThemeContext } from './theme-context/theme-context';
import { useState, useEffect } from 'react';
import Body from './components/Body/Body';

function App() {
  const [theme, setTheme] = useState('light');
  const savedTheme = window.localStorage.getItem('theme');

  useEffect(() => {
    setTheme(savedTheme !== null ? savedTheme : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/productos/:id' element={<ProductDetails />} />
        <Route path='/productos/checkout' element={<CartPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
