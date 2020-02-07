import React from "react"

import styles from "./lessons.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LessonsPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Learn the Art of Makeup</h1>
        <p>
          Hi I’m Anony! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vehicula augue vitae nibh porta mollis. Morbi nec pretium justo.
          Vestibulum sed ante dignissim, eleifend urna nec, blandit eros.
        </p>
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
