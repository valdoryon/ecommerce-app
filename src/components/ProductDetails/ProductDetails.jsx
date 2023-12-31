import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './ProductDetails.css';
import { getProducts } from '../../services/getProducts';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
  const restoredCart = JSON.parse(window.localStorage.getItem('cart'));
  const { id } = useParams();
  const API = `https://fakestoreapi.com/products/${id}`;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(restoredCart !== null ? restoredCart : []);

  useEffect(() => {
    getProducts(API, setProduct, setIsLoading);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function checkInCart() {
    if (cart.find((a) => a.id === product.id)) {
      return true;
    } else {
      return false;
    }
  }

  function handleAddToCart() {
    if (cart.find((a) => a.id === product.id)) {
      setCart(cart.filter((a) => a.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <section className='productDetails-container'>
        <section className='productDetail-section-1'>
          <img src={product.image} className='product-image' />
        </section>
        <section className='productDetail-section-2'>
          <div className='productinfo-container'>
            <h1 className='product-title productName'>{product.title}</h1>
            <h1 className='product-price'>{'$' + product.price}</h1>
            <div className='buttons-container'>
              <span className='product-description'>{product.description}</span>
              <button className='button-secondary'>Buy Now</button>
              <button onClick={handleAddToCart} className='button-primary'>
                {checkInCart() ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductDetails;
