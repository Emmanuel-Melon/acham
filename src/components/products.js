import React from "react"
import styles from "./products.module.css"

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501175635532-bdd01562edb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Bridal Glam Package",
    price: 150,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570712602066-098b4f7cb4a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Makeup Lessons",
    price: 80,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1558284484-e364d0bd7713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Everyday Glam",
    price: 80,
  },
]

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={product.image} className={styles.poster} />
      </div>
      <div className={styles.productInfo}>
        <div>
          <h4>{product.name}</h4>
          <p>Starting at ${product.price}</p>
          <button className={styles.more}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Glam Packages</h4>
      <div className={styles.products}>
        {products.map(product => {
          return <Product product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Products
