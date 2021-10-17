import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Tonkotsu Ramen",
    price: 14.5,
  },
  {
    title: "Miso Ramen",
    price: 15.5,
  },
  {
    title: "Tomato Ramen",
    price: 14.5,
  },
  {
    title: "Shoyu Ramen",
    price: 13.5,
  },
  {
    title: "Shio Ramen",
    price: 13.5,
  },
  {
    title: "Super Spicy Ramen",
    price: 16,
  },
  {
    title: "Kaisen Ramen",
    price: 18,
  },
  {
    title: "Tsukemen Ramen",
    price: 18,
  },
  {
    title: "Chilled Chuka Noodles",
    price: 13,
  },
]

const Noodle_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      tonkotsu_ramen: file(
        relativePath: { eq: "noodles/ramen/tonkotsu_ramen.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tomato_ramen: file(
        relativePath: { eq: "noodles/ramen/tomato_ramen.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miso_ramen: file(relativePath: { eq: "noodles/ramen/miso_ramen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chilled_chuka_noodles: file(
        relativePath: { eq: "noodles/ramen/chilled_chuka_noodle.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kaisen_ramen: file(
        relativePath: { eq: "noodles/ramen/kaisen_ramen.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      super_spicy_ramen: file(
        relativePath: { eq: "noodles/ramen/super_spicy_ramen.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tsukemen_ramen: file(
        relativePath: { eq: "noodles/ramen/tsukemen_ramen.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoyu_ramen: file(relativePath: { eq: "noodles/ramen/shoyu_ramen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shio_ramen: file(relativePath: { eq: "noodles/ramen/shio_ramen.png" }) {
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
