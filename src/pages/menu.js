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
      front_menu_image: file(relativePath: { eq: "Front_Menu_Image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      front_map: file(relativePath: { eq: "ranken_map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      under_construction: file(relativePath: { eq: "under_construction.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
              title="Ramen #1"
              price={9.95}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.front_menu_image.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}>
            <MenuItem
              key={"2"}
              title="Ramen #2"
              price={9.95}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.front_menu_image.childImageSharp.fluid}
            />
          </Col>
          <Col s={4}>
            <MenuItem
              key={"3"}
              title="Ramen #3"
              price={9.95}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.front_menu_image.childImageSharp.fluid}
            />
          </Col>
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
