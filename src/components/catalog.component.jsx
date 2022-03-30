import React from 'react'
import '../styles/catalog.styles.css'
export const Catalog = ({c}) => {
  return (
    <div className="product-card">
    <img src={c.image} />
    <p>{c.title}</p>
    <p>Rs.{c.price*60}</p>
    <button className="btn-cart">Add to cart</button>
  </div>
  )
}
