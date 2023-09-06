import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div onClick={props.handleAddToCart} className='productCard-container'>
      <img className='productCard-image' src={props.productImage} />
      <div className='productCard-text_container'>
        <h3 className='productCard-title'>{props.productTitle}</h3>
        <span className='productCard-price'>{'$' + props.productPrice}</span>
      </div>
    </div>
  )
}

export default ProductCard
