import React from "react"

import styles from './lessons.module.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const LessonsPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Learn the Art of Makeup</h1>
      </div>
      <div className={styles.body}>
        <div>
          <h3>No Lessons Available</h3>
          <p>Schedules will be made available soon.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default LessonsPage
