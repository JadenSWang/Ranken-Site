/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Ranken" />
      <div
        style={{
          margin: "0 auto",
          paddingTop: "46px",
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
