import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Cold Udon",
    price: 12,
  },
  {
    title: "Curry Udon",
    price: 15,
  },
  {
    title: "Tempura Udon",
    price: 15,
  },
  {
    title: "Beef Udon",
    price: 15,
  },
  {
    title: "Tempura Inaniwa Udon",
    price: 25,
  },
  {
    title: "Beef Inaniwa Udon",
    price: 25,
  },
]

const Noodle_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      beef_udon: file(relativePath: { eq: "noodles/udon/beef_udon.png" }) {
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
      curry_udon: file(relativePath: { eq: "noodles/udon/curry_udon.png" }) {
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
      tempura_inaniwa_udon: file(
        relativePath: { eq: "noodles/udon/tempura_inaniwa_udon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beef_inaniwa_udon: file(
        relativePath: { eq: "noodles/udon/beef_inaniwa_udon.png" }
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

  const buildItems = () => {
    const buildItem = function (key, prop) {
      return (
        <>
          <Col s={12} l={3}>
            <MenuItem
              key={"" + key}
              title={prop.title}
              price={prop.price}
              addItem={addItem}
              removeItem={removeItem}
              picture={
                images[prop.title.toLowerCase().replace(/ /g, "_")]
                  .childImageSharp.fluid
              }
            />
          </Col>
        </>
      )
    }

    const toReturn = []

    for (let i = 0; i < data.length; i++) {
      toReturn.push(buildItem(i, data[i]))
    }

    return toReturn
  }

  return (
    <Layout>
      <SEO title="Noodles | Online Ordering" />
      <div className="itemRow">
        <Row>{buildItems()}</Row>
      </div>
    </Layout>
  )
}

export default Noodle_Menu_Page
