import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/getProducts'
import './Body.css'
import { Link } from 'react-router-dom'

const Body = ({ cartShown }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    getProducts(API, setProducts)
  }, [])

  useEffect(() => {
    setPrice(0)
    cart.map((cartProduct) => (
      setPrice(price => price + cartProduct.price)
    ))
    setPrice(price => price.toFixed(2))
  }
  , [cart])

  function handleAddToCart (product) {
    if (cart.find(a => a.id === product.id)) {
      setCart(cart.filter(a => a.id !== product.id))
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <main className='main-body_container'>
      <section id='products' className='main-card_container'>
        {products.map((product) => (
          <Link to={`/productos/${product.id}`} key={product.id} id={product.id} className='links'>
            <ProductCard
              productImage={product.image}
              productTitle={product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
              productPrice={product.price}
            />
          </Link>
        ))}
      </section>
      {/* HACER COMPONENTE DE ESTO, TIENE QUE SER GLOBAL O LEER UN ARRAY */}
      <section id='cart-inventory' className={cartShown ? 'cart-inventory shown' : 'cart-inventory hidden'}>
        <h1 style={{ color: 'red' }}>{price}</h1>
        {cart.map((cartProduct) => (
          <ProductCard
            key={cartProduct.id}
            productImage={cartProduct.image}
            productTitle={cartProduct.title.length > 30 ? cartProduct.title.slice(0, 30) + '...' : cartProduct.title}
            productPrice={cartProduct.price}
          />
        ))}
      </section>
    </main>

  )
}

export default Body
