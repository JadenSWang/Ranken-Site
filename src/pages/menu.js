import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/menuitem.js"

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
      ginger_grilled_pork: file(
        relativePath: { eq: "ginger_grilled_pork.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teriyaki_chicken: file(relativePath: { eq: "teriyaki_chicken.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamburger_steak: file(relativePath: { eq: "hamburger_steak.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_platter: file(relativePath: { eq: "tempura_platter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fried_chicken_ponzu: file(
        relativePath: { eq: "fried_chicken_ponzu.jpg" }
      ) {
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
      <div style={{ marginTop: "4%", marginLeft: "10%", width: "80%" }}>
        <Row>
          <Col s={4}>
            <MenuItem
              key={"1"}
              title="Ginger Grilled Pork"
              price={13}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.ginger_grilled_pork.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}>
            <MenuItem
              key={"2"}
              title="Terriyaki Chicken"
              price={15}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.teriyaki_chicken.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}>
            <MenuItem
              key={"3"}
              title="Hamburger Steak"
              price={18}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.hamburger_steak.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <Row>
          <Col s={4}>
            <MenuItem
              key={"4"}
              title="Fried Chicken Ponzu"
              price={15}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.fried_chicken_ponzu.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}>
            <MenuItem
              key={"5"}
              title="Tempura Platter"
              price={18}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.tempura_platter.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}></Col>
        </Row>
      </div>

      {/* cart icons */}
      <CartIcon
        numTotalItems={numTotalItems}
        addItem={addItem}
        removeItem={removeItem}
        onClick={() => {
          console.log("test")
        }}
      />
    </Layout>
  )
}

export default MenuPage
