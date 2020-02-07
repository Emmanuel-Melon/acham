import React from "react"
import styles from "./footer.module.css"

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.header}>
          <h3 className={styles.heading}>Claudia Acham</h3>
          <p className={styles.brief}>
            Acham is an independent South Sudanese Makeup Artist who specializes
            in bridal and everyday makeup. <br /> She's a self-taught artist who
            has turned her passion into a profession.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <h3>Contact</h3>
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
          <div>
            <h3>Makeup Lessons</h3>
            <ul>
              <li>Private Lessons</li>
              <li>Public Lessons</li>
              <li>Membership</li>
            </ul>
          </div>
        </div>
        <div className={styles.find}>
          <ul className={styles.social}>
            <li>
              <a href="www.instagram.com/junobeaut">
                <FaInstagram size="2rem" className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://m.youtube.com/Acham%20Claudia?uid=G7f9iJKOMAOSKGaSWk3lmQ">
                <FaYoutube size="2rem" className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/achamdiit/">
                <FaFacebook size="2rem" className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
