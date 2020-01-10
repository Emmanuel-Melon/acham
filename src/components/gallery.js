import React from "react"
import styles from "./gallery.module.css"
import Moment from "moment"

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1577854744691-924ac0bff526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    name: "Lupita Nyong'o",
    date: Date.now()
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Cheben Gatwech",
    date: Date.now()
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517252035141-567e4d9b89df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    name: "Janelle Monae",
    date: Date.now()
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1528791067602-aee628b626fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Jameela El-Jameel",
    date: Date.now()
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1520720682573-858a3ff754fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Megan Thee Stallion",
    date: Date.now()
  },
]

const Product = ({ product }) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={product.image} className={styles.poster} />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{product.name}</h3>
        </div>
      </div>
    </div>
  )
}

const Gallery = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Happy Clients</h4>
      <div className={styles.gallery}>
        {products.map(product => {
          return <Product product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Gallery
