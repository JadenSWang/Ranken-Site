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
      ramen_title: file(relativePath: { eq: "ramen_title.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      udon_title: file(relativePath: { eq: "udon_title.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soba_title: file(relativePath: { eq: "soba_title.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice_title: file(relativePath: { eq: "rice_title.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skewer_title: file(relativePath: { eq: "skewer_title.jpg" }) {
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
        <Row style={{ marginTop: "3%", width: "90%", marginLeft: "5%" }}>
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/a-la-carte">
                  <b>À La Carte</b>
                </Link>
              }
              header={
                <Img fluid={images.hamburger_steak.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/ramen">
                  <b>Ramen</b>
                </Link>
              }
              header={
                <Img fluid={images.ramen_title.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/udon">
                  <b>Udon</b>
                </Link>
              }
              header={
                <Img fluid={images.udon_title.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          {console.log(images)}
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/soba">
                  <b>Soba</b>
                </Link>
              }
              header={
                <Img fluid={images.soba_title.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/rice">
                  <b>Rice</b>
                </Link>
              }
              header={
                <Img fluid={images.rice_title.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
          <Col s={12} l={4}>
            <Card
              title={
                <Link to="/menu/skewers">
                  <b>Skewers</b>
                </Link>
              }
              header={
                <Img fluid={images.skewer_title.childImageSharp.fluid}></Img>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default MenuPage
