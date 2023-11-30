import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../services/getProducts';
import Navbar from '../Navbar/Navbar';
import './Body.css';
import Loader from '../Loader/Loader';

const Body = () => {
  const restoredCart = JSON.parse(window.localStorage.getItem('cart'));

  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(restoredCart !== null ? restoredCart : []);
  const API = 'https://fakestoreapi.com/products';

  // RECUPERAR THEME DE LA PAGINA

  // GET PRODUCTS
  useEffect(() => {
    getProducts(API, setProducts, setIsLoading);
  }, []);

  // GUARDAR LOCAL STORAGE
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // AGREGAR AL CARRITO
  function handleAddToCart(product) {
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
      <main className='main-body_container'>
        <section id='products' className='main-card_container'>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
                handleAddCart={() => handleAddToCart(product)}
                productId={product.id}
                product={product}
                productAlt={product.title}
                cart={cart}
              />
            </React.Fragment>
          ))}
        </section>
      </main>
    </>
  );
};

export default Body;
