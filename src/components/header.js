import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { BrowserView, MobileView } from "react-device-detect"

import "../css/header.css"

import logo from "../images/ranken_logo.jpg"

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  font-family: Calibri;
`

const browserView = (
  <BrowserView>
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
            width: 100,
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
            marginLeft: 20,
            marginRight: 20,
            display: "inline-block",
          }}
        >
          <StyledLink
            to="/"
            className="headerItem"
            activeStyle={{ color: "#ff9900" }}
          >
            Home
          </StyledLink>
        </div>
        <div
          id="header_Item"
          style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
        >
          <StyledLink to="/menu" activeStyle={{ color: "#ff9900" }}>
            Menu
          </StyledLink>
        </div>
        <div
          id="header_Item"
          style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
        >
          <StyledLink to="/locate" activeStyle={{ color: "#ff9900" }}>
            Locate
          </StyledLink>
        </div>
        <div
          id="header_Item"
          style={{ marginLeft: 20, marginRight: 20, display: "inline-block" }}
        >
          <StyledLink to="/contact" activeStyle={{ color: "#ff9900  " }}>
            Contact
          </StyledLink>
        </div>
      </div>
    </header>
  </BrowserView>
)

const mobileView = (
  <MobileView>
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
          width: 35,
          marginLeft: 10,
          marginTop: 10,
        }}
      ></img>
    </Link>
    </header>
  </MobileView>
)

const Header = ({ siteTitle }) => (
  <>
    {browserView}
    {mobileView}
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
