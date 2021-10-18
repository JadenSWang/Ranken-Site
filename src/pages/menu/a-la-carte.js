import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Edamame",
    price: 5,
  },
  {
    title: "Vegetable Salad",
    price: 7,
  },
  {
    title: "Potato Salad",
    price: 6,
  },
  {
    title: "Bacon Ceasar Salad",
    price: 10,
  },
  {
    title: "Tempura Platter",
    price: 25,
  },
  {
    title: "Fried Chicken Ponzu",
    price: 15,
  },
  {
    title: "Grilled Salmon",
    price: 20,
  },
  {
    title: "Grilled Sea Bass",
    price: 25,
  },
  {
    title: "Ginger Grilled Pork",
    price: 13,
  },
  {
    title: "Teriyaki Chicken",
    price: 15,
  },
  {
    title: "Hamburger Steak",
    price: 18,
  },
  {
    title: "Beef Steak",
    price: 25,
  },
  {
    title: "Gyoza",
    price: 6,
  },
]

const ALaCarte_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      gyoza: file(relativePath: { eq: "entrees/a la carte/gyoza.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      edamame: file(relativePath: { eq: "entrees/a la carte/edamame.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      potato_salad: file(
        relativePath: { eq: "entrees/a la carte/potato_salad.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vegetable_salad: file(
        relativePath: { eq: "entrees/a la carte/vegetable_salad.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ginger_grilled_pork: file(
        relativePath: { eq: "entrees/a la carte/ginger_grilled_pork.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teriyaki_chicken: file(
        relativePath: { eq: "entrees/a la carte/teriyaki_chicken.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamburger_steak: file(
        relativePath: { eq: "entrees/a la carte/hamburger_steak.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grilled_salmon: file(
        relativePath: { eq: "entrees/a la carte/grilled_salmon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_platter: file(
        relativePath: { eq: "entrees/a la carte/tempura_platter.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fried_chicken_ponzu: file(
        relativePath: { eq: "entrees/a la carte/fried_chicken_ponzu.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bacon_ceasar_salad: file(
        relativePath: { eq: "entrees/a la carte/bacon_ceasar_salad.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beef_steak: file(
        relativePath: { eq: "entrees/a la carte/beef_steak.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grilled_sea_bass: file(
        relativePath: { eq: "entrees/a la carte/grilled_sea_bass.jpg" }
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
