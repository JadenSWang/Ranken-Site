import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card } from "react-materialize"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/menu.css"

import { Icon, Row, Col } from "react-materialize"

const CartIcon = ({ numTotalItems, onClick }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "inline-block",
          marginTop: "12vh",
          marginLeft: "5vw",
        }}
        onClick={onClick}
        onKeyDown={() => {}}
      >
        <Icon medium>local_dining</Icon>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#DDD",
            display: "inline-block",
            borderRadius: "50%",

            marginLeft: "-8px",
            marginTop: "-15px",
            paddingTop: "3px",
            position: "absolute",

            textAlign: "center",
          }}
        >
          {numTotalItems}
        </div>
      </div>
    </>
  )
}

const MenuPage = () => {
  const images = useStaticQuery(graphql`
    query {
      hamburger_steak: file(
        relativePath: { eq: "entrees/a la carte/hamburger_steak.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_udon: file(
        relativePath: { eq: "noodles/udon/tempura_udon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cold_udon: file(relativePath: { eq: "noodles/udon/cold_udon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [numTotalItems, setItems] = useState(0)

  const addItem = () => {
    setItems(numTotalItems + 1)
  }

  const removeItem = () => {
    setItems(numTotalItems - 1)
  }

  return (
    <Layout>
      <SEO title="Online Ordering" />
      <div className="rowStyle">
        <Row style={{ marginTop: "3%" }}>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/a-la-carte">À La Carte</Link>}
              header={
                <Img fluid={images.hamburger_steak.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/ramen">Ramen</Link>}
              header={
                <Img fluid={images.cold_udon.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/udon">Udon</Link>}
              header={
                <Img fluid={images.cold_udon.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/soba">Soba</Link>}
              header={
                <Img fluid={images.cold_udon.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/rice">Rice</Link>}
              header={
                <Img fluid={images.cold_udon.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/skewers">Skewers</Link>}
              header={
                <Img fluid={images.cold_udon.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={<Link to="menu/">Bento Boxes</Link>}
              header={
                <Img fluid={images.hamburger_steak.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default MenuPage
