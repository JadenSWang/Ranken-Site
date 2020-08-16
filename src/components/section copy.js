import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Section = ({ title, color, textColor, to, label }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: `none`,
        fontSize: "15px",
      }}
    >
      <div
        style={{
          color: textColor,
          backgroundColor: color,
          position: "relative",
          width: "100%",
          height: "10em",
          paddingTop: "10%",
          textAlign: "center",
        }}
      >
        {/* Title  */}
        <div
          style={{
            fontSize: "9vw",
            width: "50%",
            marginBottom: "2%",
            marginLeft: "25%",
            marginRight: "25%",
            textAlign: "center",
          }}
        >
          {title}
        </div>
        {/* Links */}
        <div
          style={{
            fontSize: "4vw",
            marginTop: "3%",
          }}
        >
          <div
            style={{
              width: "30%",
              display: "inline-block",
            }}
          >
            <Link
              to={to}
              style={{
                textDecoration: `none`,
                color: "#1e6ed7",
              }}
            >
              {label} ›
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

Section.propTypes = {
  color: PropTypes.node.isRequired,
}

export default Section
