import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 className='brand'>
          <Link
            to="/"
            style={{
              color: `#E94057`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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
              marginRight: 32
            }}
          >
            Makeup
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: 8,
              marginRight: 32
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
