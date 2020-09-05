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
  {
    title: "Vegetable Salad",
    price: 8,
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
    price: 18,
  },
  {
    title: "Fried Chicken Ponzu",
    price: 25,
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
    title: "Fried Rice",
    price: 12,
  },
  {
    title: "Curry Rice",
    price: 15,
  },
  {
    title: "Cooked Mushroom Rice",
    price: 8,
  },
  {
    title: "Thigh",
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
      steamed_soybeans: file(
        relativePath: { eq: "entrees/a la carte/steamed_soybeans.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      potato_salad: file(
        relativePath: { eq: "entrees/a la carte/potato_salad.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vegetable_salad: file(
        relativePath: { eq: "entrees/a la carte/vegetable_salad.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ginger_grilled_pork: file(
        relativePath: { eq: "entrees/a la carte/ginger_grilled_pork.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teriyaki_chicken: file(
        relativePath: { eq: "entrees/a la carte/teriyaki_chicken.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamburger_steak: file(
        relativePath: { eq: "entrees/a la carte/hamburger_steak.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grilled_salmon: file(
        relativePath: { eq: "entrees/a la carte/grilled_salmon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_platter: file(
        relativePath: { eq: "entrees/a la carte/tempura_platter.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fried_chicken_ponzu: file(
        relativePath: { eq: "entrees/a la carte/fried_chicken_ponzu.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bacon_ceasar_salad: file(
        relativePath: { eq: "entrees/a la carte/bacon_ceasar_salad.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beef_steak: file(
        relativePath: { eq: "entrees/a la carte/beef_steak.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grilled_sea_bass: file(
        relativePath: { eq: "entrees/a la carte/grilled_sea_bass.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyoza: file(relativePath: { eq: "entrees/rice/gyoza.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fried_rice: file(relativePath: { eq: "entrees/rice/fried_rice.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry_rice: file(relativePath: { eq: "entrees/rice/curry_rice.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cooked_mushroom_rice: file(
        relativePath: { eq: "entrees/rice/cooked_mushroom_rice.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quail_eggs_and_bacon: file(
        relativePath: { eq: "entrees/skewers/quail_eggs_and_bacon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      negima: file(relativePath: { eq: "entrees/skewers/negima.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      enoki_bacon: file(
        relativePath: { eq: "entrees/skewers/enoki_bacon.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shiitake_mushroom: file(
        relativePath: { eq: "entrees/skewers/shiitake_mushroom.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shrimp: file(relativePath: { eq: "entrees/skewers/shrimp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thigh: file(relativePath: { eq: "entrees/skewers/thigh.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 750) {
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
      console.log(prop.title.toLowerCase().replace(/ /g, "_"))
      console.log(images)

      return (
        <Col s={3}>
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
      <div style={{ marginTop: "4%", marginLeft: "10%", width: "80%" }}>
        <Row>{buildItems()}</Row>
      </div>
    </Layout>
  )
}

export default ALaCarte_Menu_Page
