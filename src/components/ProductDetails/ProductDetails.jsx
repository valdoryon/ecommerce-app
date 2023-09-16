import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './ProductDetails.css'
import { getProducts } from '../../services/getProducts'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const restoredCart = JSON.parse(window.localStorage.getItem('cart'))
  const { id } = useParams()
  const API = `https://fakestoreapi.com/products/${id}`
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState(restoredCart !== null ? restoredCart : [])

  useEffect(() => {
    getProducts(API, setProduct)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function checkInCart () {
    if (cart.find(a => a.id === product.id)) {
      return true
    } else {
      return false
    }
  }

  function handleAddToCart () {
    if (cart.find(a => a.id === product.id)) {
      setCart(cart.filter(a => a.id !== product.id))
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <>
      <Navbar />
      <main className='productDetails-main'>
        <section className='productDetails-container'>
          <section className='productDetail-section-1'>
            <img src={product.image} className='product-image' />
            <h1 className='product-title'>DESCRIPTION</h1>
            <span className='product-description'>{product.description}</span>
          </section>
          <section className='productDetail-section-2'>
            <div className='productinfo-container'>
              <h1 className='product-title productName'>{product.title}</h1>
              <h1 className='product-price'>{'$' + product.price}</h1>
              <div className='buttons-container'>
                <button className='button-secondary'>Comprar ahora</button>
                <button onClick={handleAddToCart} className='button-primary'>
                  {checkInCart() ? 'Quitar del Carrito' : 'Agregar al carrito'}
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default ProductDetails
