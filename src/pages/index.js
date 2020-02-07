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
    <div className="wrapper">
      <div className="content">
        <div className="bio">
          <div>
            <h1 style={{ color: "pink", textDecoration: "underline" }}>
              Beauty, Skincare & more...
            </h1>
            <p>
              Salaam! Claudia Acham is a professional MUA, mainly based in Juba,
              South Sudan & Nairobi, Kenya.{" "}
            </p>
            <p>
              We’ve been dealing in the makeup industry since 2017, offering
              makeup services ranging from bridal, portraits and photo shoots,
              fashion shows, prom nights, commercial advertisements and more.
            </p>
            <button className="action">Book your Experience</button>
          </div>
        </div>
        <div className="profile-image">
          <img
            src="https://images.unsplash.com/photo-1528791067602-aee628b626fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              transform: "rotate(2deg)",
              margin: 8,
            }}
          />
        </div>
      </div>
    </div>
    <Hero />
    <div className="body">
      <div>
        <Products />
        <Gallery />
      </div>
    </div>
  </Layout>
)

export default IndexPage
