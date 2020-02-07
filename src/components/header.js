import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaUser, FaGraduationCap, FaBrush } from "react-icons/fa"

import styled from "styled-components"

const brand = styled.h1``

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: "0.5rem",
      background: "#000000",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        marginTop: "0.5rem",
        padding: `0.20rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: `#E94057`,
            textDecoration: `none`,
          }}
          className="brand"
        >
          {siteTitle}
        </Link>
      </div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li>
          <Link
            to="/makeup"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: 8,
              marginRight: 32,
            }}
          >
            Makeup
          </Link>
        </li>
        <li>
          <Link
            to="/lessons"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: 8,
              marginRight: 32,
            }}
          >
            Lessons
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
