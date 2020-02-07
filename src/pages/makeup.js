import React from "react"
import styles from "./makeup.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaCheck } from "react-icons/fa"

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1577854744691-924ac0bff526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    name: "Lupita Nyong'o",
    date: Date.now(),
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Cheben Gatwech",
    date: Date.now(),
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517252035141-567e4d9b89df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    name: "Janelle Monae",
    date: Date.now(),
  },
]

const MakeupPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.main}>Book your Experience</h1>
        <p>
          Hi I’m Anony! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vehicula augue vitae nibh porta mollis. Morbi nec pretium justo.
          Vestibulum sed ante dignissim, eleifend urna nec, blandit eros.
        </p>
      </div>
      <div className={styles.upper}>
        <h3 className={styles.heading}>Choose a Plan</h3>
        <div className={styles.demo}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.option}>
                <img
                  src={product.image}
                  alt="model"
                  className={styles.poster}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h3 className={styles.heading}>Book Appointment</h3>
        <div className={styles.plans}>
          <div className={styles.left}>
            <div>
              <h3>Current Plan: Bridal</h3>
              <p>Plan Includes</p>
              <ul className={styles.details}>
                <li>
                  Bridal Glam <FaCheck className={styles.icon} />
                </li>
                <li>
                  Editorial Glam <FaCheck className={styles.icon} />
                </li>
                <li>
                  Henna Glam <FaCheck className={styles.icon} />
                </li>
                <li>
                  Everyday Glam <FaCheck className={styles.icon} />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <h3>Appointment Details</h3>
            <p>We'll get in touch with you soon!</p>
            <form>
              <div className={styles.formControl}>
                <label for="name">Name</label>
                <input type="text" placeholder="Your Name..." />
              </div>
              <div className={styles.formControl}>
                <label for="phone">Phone Number</label>
                <input type="text" placeholder="Your Phone Number..." />
              </div>
              <div className={styles.formControl}>
                <label for="option">Plan</label>
                <select name="pets" id="pet-select" className={styles.select}>
                  <option value="">--Please choose an option--</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </select>
              </div>
              <div className={styles.formControl}>
                <label for="phone">Date</label>
                <input type="text" placeholder="DD/MM" />
              </div>

              <button className={styles.confirm}>Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default MakeupPage
