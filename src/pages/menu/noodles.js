import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"

import { Icon, Row, Col } from "react-materialize"

const data = [
  {
    title: "Steamed Soybeans",
    price: 5,
  },
]

const Noodle_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      cold_soba: file(relativePath: { eq: "noodles/soba/cold_soba.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zaru_soba: file(relativePath: { eq: "noodles/soba/zaru_soba.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_soba: file(
        relativePath: { eq: "noodles/soba/tempura_soba.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cold_udon: file(relativePath: { eq: "noodles/udon/cold_udon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry_udon: file(relativePath: { eq: "noodles/udon/curry_udon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beef_udon: file(relativePath: { eq: "noodles/udon/beef_udon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_udon: file(
        relativePath: { eq: "noodles/udon/tempura_udon.jpg" }
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
      <SEO title="Noodles | Online Ordering" />
      <div style={{ marginTop: "4%", marginLeft: "10%", width: "80%" }}>
        <Row>
          <Col s={12} l={3}>
            <MenuItem
              key={"1"}
              title="Cold Soba (Cold)"
              price={13.5}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.cold_soba.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"2"}
              title="Zaru-Soba (Cold)"
              price={13}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.zaru_soba.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"4"}
              title="Beef Soba (Hot or Cold)"
              price={16}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.cold_soba.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"3"}
              title="Tempura Soba (Hot or Cold)"
              price={16}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.tempura_soba.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"5"}
              title="Cold Udon (Cold)"
              price={12}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.cold_udon.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"6"}
              title="Curry Udon (Hot)"
              price={15}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.curry_udon.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"7"}
              title="Tempura Udon (Hot or Cold)"
              price={15}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.tempura_udon.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"8"}
              title="Beef Udon (Hot or Cold)"
              price={15}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.beef_udon.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"9"}
              title="Tempura Inaniwa Udon (Hot)"
              price={25}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.tempura_udon.childImageSharp.fluid}
            />
          </Col>
          <Col s={12} l={3}>
            <MenuItem
              key={"10"}
              title="Beef Inaniwa Udon(Hot)"
              price={25}
              addItem={addItem}
              removeItem={removeItem}
              picture={images.beef_udon.childImageSharp.fluid}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Noodle_Menu_Page
