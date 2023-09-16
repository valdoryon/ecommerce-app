import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage/MainPage'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartPage from './components/CartPage/CartPage'
import { ThemeContext } from './theme-context/theme-context'
import { useState, useEffect } from 'react'

function App () {
  const [theme, setTheme] = useState('light')
  const savedTheme = window.localStorage.getItem('theme')

  useEffect(() => {
    setTheme(savedTheme !== null ? savedTheme : 'light')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={`main-wrapper ${theme}`}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/productos/:id' element={<ProductDetails />} />
          <Route path='/productos/checkout' element={<CartPage />} />
        </Routes>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
