import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.links}>
          <div>
            <h3>Contact Me</h3>
            <ul>
              <li>0779912345</li>
              <li>claudia.awesome@gmail.com</li>
              <li>Juba, South Sudan.</li>
            </ul>
          </div>
          <div>
            <h3>Glam Packages</h3>
            <ul>
              <li>Bridal Glam</li>
              <li>Editorial Glam</li>
              <li>Henna Glam</li>
              <li>Everyday Glam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
