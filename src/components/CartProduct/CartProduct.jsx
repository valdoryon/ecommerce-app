import React from 'react'
import './CartProduct.css'
import { Link } from 'react-router-dom'
const CartProduct = (props) => {
  return (
    <div className='cartProduct-container'>
      <div className='cartProduct'>
        <Link to={`/productos/${props.id}`} id={props.id} className='links'>
          <img className='cartProduct-image' src={props.image} />
        </Link>
        <p className='cartProduct-title'>{props.title}</p>
      </div>
      <h2 className='cartProduct-price'>${props.price}</h2>
      <div onClick={props.handleRemove} className='cartProduct-rm-button'>
        <img src='/cart-cross.svg' />
      </div>
    </div>
  )
}

export default CartProduct
