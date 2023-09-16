import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import CartProduct from '../CartProduct/CartProduct'
import './CartPage.css'

const Cart = () => {
  const restoredCart = JSON.parse(window.localStorage.getItem('cart'))

  const [cart, setCart] = useState(restoredCart !== null ? restoredCart : [])
  const [totalPrice, setTotalPrice] = useState(0)

  function Cart () {
    if (cart.length > 0) {
      return (
        <section className='cart-wrapper'>
          <div className='cart-container'>
            <div className='cartProducts-container'>
              {cart.map((cartProduct) => (
                <React.Fragment key={cartProduct.id}>
                  <CartProduct
                    id={cartProduct.id}
                    image={cartProduct.image}
                    title={cartProduct.title}
                    price={cartProduct.price}
                    handleRemove={() => handleRemove(cartProduct)}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className='cart-purchase-container'>
              <button className='cart-purchase_button'>Purchase</button>
              <button onClick={() => setCart([])} className='cart-purchase_button'>Remove all</button>
              <h1 className='cart-final-price'>Total: ${totalPrice}</h1>
            </div>
          </div>
        </section>

      )
    } else {
      return (
        <section className='cart-wrapper'>
          <h1>NO TENES NADA EN TU CARRITO :( <a href='/'>VE A LA TIENDA</a></h1>
        </section>
      )
    }
  }

  // QUITAR DEL LOCAL STORAGE

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // QUITAR DEL CARRITO

  function handleRemove (product) {
    if (cart.find(a => a.id === product.id)) {
      setCart(cart.filter(a => a.id !== product.id))
    }
  }

  // PRECIO
  useEffect(() => {
    setTotalPrice(0)
    cart.map((cartProduct) => (
      setTotalPrice(price => price + cartProduct.price)
    ))
    setTotalPrice(price => price.toFixed(2))
  }
  , [cart])

  return (
    <>
      <Navbar />
      <Cart />
    </>
  )
}

export default Cart
