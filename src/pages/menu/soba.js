import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Cold Soba",
    price: 13.5,
  },
  {
    title: "Zaru Soba",
    price: 13,
  },
  {
    title: "Tempura Soba",
    price: 16,
  },
  {
    title: "Beef Soba",
    price: 16,
  },
]

const Noodle_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      beef_soba: file(relativePath: { eq: "noodles/soba/beef_soba.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cold_soba: file(relativePath: { eq: "noodles/soba/cold_soba.png" }) {
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
      zaru_soba: file(relativePath: { eq: "noodles/soba/zaru_soba.png" }) {
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
