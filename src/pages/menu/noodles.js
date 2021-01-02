import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const data = [
  {
    title: "Chilled Chuka Noodles",
    price: 13,
  },
  {
    title: "Kaisen Ramen",
    price: 18,
  },
  {
    title: "Shio Ramen",
    price: 12.5,
  },
  {
    title: "Shoyu Ramen",
    price: 13,
  },
  {
    title: "Super Spicy Ramen",
    price: 13,
  },
  {
    title: "Tsukemen Ramen",
    price: 18,
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
  {
    title: "Cold Soba",
    price: 13.5 ,
  },
  {
    title: "Beef Udon",
    price: 15 ,
  },
  {
    title: "Curry Udon",
    price: 15 ,
  },
  {
    title: "Tempura Udon",
    price: 15 ,
  },
  {
    title: "Cold Udon",
    price: 12 ,
  },
  {
    title: "Tempura Inaniwa Udon",
    price: 25 ,
  },
  {
    title: "Beef Inaniwa Udon",
    price: 25 ,
  },
]

const Noodle_Menu_Page = () => {
  const images = useStaticQuery(graphql`
    query {
      chilled_chuka_noodles: file(relativePath: { eq: "noodles/ramen/chilled_chuka_noodle.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kaisen_ramen: file(relativePath: { eq: "noodles/ramen/kaisen_ramen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      super_spicy_ramen: file(relativePath: { eq: "noodles/ramen/super_spicy_ramen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tsukemen_ramen: file(relativePath: { eq: "noodles/ramen/tsukemen_ramen.png" }) {
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
      tempura_soba: file(relativePath: { eq: "noodles/soba/tempura_soba.png" }) {
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
      tempura_udon: file(relativePath: { eq: "noodles/udon/tempura_udon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura_inaniwa_udon: file(relativePath: { eq: "noodles/udon/tempura_inaniwa_udon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beef_inaniwa_udon: file(relativePath: { eq: "noodles/udon/beef_inaniwa_udon.png" }) {
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
      console.log(prop.title.toLowerCase().replace(/ /g, "_"))
      console.log(images)

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
      <SEO title="Noodles | Online Ordering" />
      <div className="itemRow" >
        <Row>{buildItems()}
        </Row>
      </div>
    </Layout>
  )
}

export default Noodle_Menu_Page
