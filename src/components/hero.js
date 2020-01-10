import React from "react"
import styles from "./hero.module.css"

const models = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1577854744691-924ac0bff526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517252035141-567e4d9b89df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1528791067602-aee628b626fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1520720682573-858a3ff754fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
]

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.models}>
        {models.map(model => {
          return (
            <div key={model.id} className={styles.model}>
              <img src={model.image} className={styles.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
