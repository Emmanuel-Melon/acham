import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h2 className={styles.heading}>Claudia Acham</h2>
        <p className={styles.brief}>Acham is an independent South Sudanese Makeup Artist.</p>
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
              <img src='https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png' alt='facebook' />
            </li>
            <li><img src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/twitter-512.png' alt='twitter' /></li>
            <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png' alt='instagram' /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
