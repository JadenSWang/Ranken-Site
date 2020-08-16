import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../css/header.css"

import logo from "../images/ranken_logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `inherit`,
      width: "100vw",
      height: "46px",
      opacity: "0.96",
      position: "fixed",
      zIndex: "100",
    }}
  >
    <Link to="/">
      <img
        src={logo}
        style={{
          position: "absolute",
          width: 80,
          marginLeft: 10,
          marginTop: 10,
        }}
      ></img>
    </Link>

    <div
      style={{
        fontSize: 22,
        width: "50%",
        marginLeft: "25%",
        marginTop: 15,
        textAlign: "center",
      }}
    >
      <div
        id="header_Item"
        style={{
          color: "#fff",
          marginLeft: 20,
          marginRight: 20,
          display: "inline-block",
        }}
      >
        <Link to="/" activeStyle={{ color: "#ff9900" }}>
          Home
        </Link>
      </div>
      <div
        id="header_Item"
        style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
      >
        <Link to="/menu" activeStyle={{ color: "#ff9900" }}>
          Menu
        </Link>
      </div>
      <div
        id="header_Item"
        style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
      >
        <Link to="/order" activeStyle={{ color: "#ff9900" }}>
          Order
        </Link>
      </div>
      <div
        id="header_Item"
        style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
      >
        <Link to="/locate" activeStyle={{ color: "#ff9900" }}>
          Locate
        </Link>
      </div>
      <div
        id="header_Item"
        style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
      >
        <Link to="/contact" activeStyle={{ color: "#ff9900  " }}>
          Contact
        </Link>
      </div>
    </div>
    {/* <Hamburger />
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
        fontSize: "30px",
        textAlign: "center",
        width: "40vw",
        marginLeft: "25vw",
        position: "absolute",
      }}
    >
      {siteTitle}
    </Link> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
