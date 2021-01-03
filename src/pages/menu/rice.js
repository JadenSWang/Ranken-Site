import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Fried Rice",
    price: 12,
  },
  {
    title: "Curry Rice",
    price: 15,
  },
  {
    title: "Mushroom Fried Rice",
    price: 8,
  },
  {
    title: "White Rice",
    price: 2.5,
  },
]

const ALaCarte_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      fried_rice: file(relativePath: { eq: "entrees/rice/fried_rice.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry_rice: file(relativePath: { eq: "entrees/rice/curry_rice.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mushroom_fried_rice: file(
        relativePath: { eq: "entrees/rice/mushroom_fried_rice.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      white_rice: file(relativePath: { eq: "entrees/rice/white_rice.jpg" }) {
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
        <Col s={12} l={3} style={{ height: "450px" }}>
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
      <SEO title="À La Carte | Online Ordering" />
      <div className="itemRow">
        <Row>{buildItems()}</Row>
      </div>
    </Layout>
  )
}

export default ALaCarte_Menu_Page
