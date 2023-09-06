import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './ProductDetails.css'
import { getProducts } from '../../services/getProducts'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const API = `https://fakestoreapi.com/products/${id}`
  const [product, setProduct] = useState([])

  console.log(API)

  useEffect(() => {
    getProducts(API, setProduct)
  }, [])

  console.log(product)

  return (
    <>
      <Navbar />
      <main className='productDetails-main'>
        <section className='productDetails-container'>
          <section className='productDetail-section-1'>
            <img src={product.image} className='product-image' />
            <h1 className='product-title'>DESCRIPCIÓN</h1>
            <span className='product-description'>{product.description}</span>
          </section>
          <section className='productDetail-section-2'>
            <div className='productinfo-container'>
              <h1 className='product-title productName'>{product.title}</h1>
              <h1 className='product-price'>{'$' + product.price}</h1>
              <div className='buttons-container'>
                <button className='button-secondary'>Comprar ahora</button>
                <button className='button-primary'>Agregar al carro</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default ProductDetails
