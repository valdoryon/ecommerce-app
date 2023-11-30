import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const [inCart, setInCart] = useState(false);

  function checkInCart(product, cart) {
    if (cart.find((a) => a.id === product.id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }

  useEffect(() => {
    checkInCart(props.product, props.cart);
  }, [props.cart]);

  return (
    <div onClick={props.handleAddToCart} className='productCard-container'>
      <Link
        to={`/productos/${props.productId}`}
        id={props.productId}
        className='productCard-image links'
      >
        <img src={props.productImage} alt={props.productAlt} />
      </Link>
      <div className='productCard-text_container'>
        <h3 className='productCard-title'>{props.productTitle}</h3>
        <span className='productCard-price'>{'$' + props.productPrice}</span>
        <button
          className={
            inCart ? 'productCard-addButton inCart' : 'productCard-addButton'
          }
          onClick={props.handleAddCart}
        >
          <span>{inCart ? 'IN CART' : 'ADD TO CART'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
