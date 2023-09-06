import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/mainPage/MainPage'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App () {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/productos/:id' element={<ProductDetails />} />
    </Routes>

  )
}

export default App
