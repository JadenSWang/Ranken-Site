import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Yakitori",
    price: 3,
  },
  {
    title: "Negima",
    price: 3,
  },
  {
    title: "Quail Eggs and Bacon",
    price: 3,
  },
  {
    title: "Enoki Bacon",
    price: 3,
  },
  {
    title: "Shiitake Mushroom",
    price: 2.5,
  },
  {
    title: "Shrimp",
    price: 3,
  },
]

const ALaCarte_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      quail_eggs_and_bacon: file(
        relativePath: { eq: "entrees/skewers/quail_eggs_and_bacon.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      negima: file(relativePath: { eq: "entrees/skewers/negima.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      enoki_bacon: file(
        relativePath: { eq: "entrees/skewers/enoki_bacon.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shiitake_mushroom: file(
        relativePath: { eq: "entrees/skewers/shiitake_mushroom.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shrimp: file(relativePath: { eq: "entrees/skewers/shrimp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yakitori: file(relativePath: { eq: "entrees/skewers/yakitori.jpg" }) {
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
      console.log(images)

      return (
        <Col s={12} l={3} style={{height: "450px"}}>
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
      <div className="itemRow" >
        <Row>{buildItems()}</Row>
      </div>
    </Layout>
  )
}

export default ALaCarte_Menu_Page
