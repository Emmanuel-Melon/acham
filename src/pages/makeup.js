import React from "react"
import styles from './makeup.module.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const MakeupPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Book an Incredible Makeup Experience</h1>
        <p>
          Hi I’m Anony! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula augue vitae nibh porta mollis. Morbi nec pretium justo. Vestibulum sed ante dignissim, eleifend urna nec, blandit eros.
        </p>
        <button className='action'>Get Started</button>
      </div>
      <div className={styles.plans}>
        <div>
          <h3>Bridal</h3>
          <p className={styles.heading}>250$ per session</p>
          <ul>
            <li>Bridal Glam</li>
            <li>Editorial Glam</li>
            <li>Henna Glam</li>
            <li>Everyday Glam</li>
          </ul>
        </div>
        <div>
          <h3>Bridal</h3>
          <p className={styles.heading}>250$ per session</p>
          <ul>
            <li>Bridal Glam</li>
            <li>Editorial Glam</li>
            <li>Henna Glam</li>
            <li>Everyday Glam</li>
          </ul>
        </div>
        <div>
          <h3>Bridal</h3>
          <p className={styles.heading}>250$ per session</p>
          <ul>
            <li>Bridal Glam</li>
            <li>Editorial Glam</li>
            <li>Henna Glam</li>
            <li>Everyday Glam</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default MakeupPage
