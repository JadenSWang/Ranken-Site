import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Card } from "react-materialize"

const Section = ({ title, color, textColor, to, label, link }) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          style={{
            textDecoration: `none`,
            fontSize: "15px",
          }}
        >
          <Card
            title={title}
            style={{
              width: "84vw",
              height: "110px",
              marginLeft: "8vw",
              marginTop: "2vh",
              textAlign: "center",
            }}
          >
            <Link
              to={to}
              style={{
                textDecoration: `none`,
                color: "#1e6ed7",
              }}
            >
              {label}
            </Link>
          </Card>
        </Link>
      ) : (
        <a href={link}>
          <Card
            title={title}
            style={{
              width: "84vw",
              height: "110px",
              marginLeft: "8vw",
              marginTop: "2vh",
              textAlign: "center",
            }}
          >
            <Link
              to={to}
              style={{
                textDecoration: `none`,
                color: "#1e6ed7",
              }}
            >
              {label}
            </Link>
          </Card>
        </a>
      )}
    </>
  )
}

Section.propTypes = {
  color: PropTypes.node.isRequired,
}

export default Section
