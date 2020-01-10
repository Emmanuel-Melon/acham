import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

/**
 * components
 */
import Hero from "../components/hero"
import Products from "../components/products"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO Claudia Acham="Home" />
    <div className='wrapper'>
      <div style={{  display: 'flex', justifyContent: 'space-between',  width: 900 }}>
        <div style={{ flex: 2, displazy: 'flex', alignItems: 'center'}}>
          <div>
            <h1 style={{ color: 'pink' }}>Beauty, Skincare  & more...</h1>
            <p>
              Hi I’m Anony! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula augue vitae nibh porta mollis. Morbi nec pretium justo. Vestibulum sed ante dignissim, eleifend urna nec, blandit eros.
            </p>
            <button className='action'>Book your Experience</button>
          </div>
        </div>
        <div style={{ maxWidth: 300, flex: 2}}>
          <img src='https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='' style={{ width: '100%', height: 'auto', transform: 'rotate(2deg)' }}/>
        </div>
      </div>
    </div>
    <Hero />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Products />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Gallery />
    </div>
  </Layout>
)

export default IndexPage
