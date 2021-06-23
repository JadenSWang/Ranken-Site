import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MenuItem from "../../components/menuitem.js"
import "../../css/menu.css"

import { Row, Col } from "react-materialize"

const TESTPAGE = () => {
  const images = useStaticQuery(graphql`
    {
      menuItem {
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        data {
          price
          title
          featuredImgUrl
        }
      }
    }
  `)

  console.log(images)

  const buildItems = () => {
    const buildItem = function (key, prop) {
      return (
        <Col s={12} l={3} style={{ height: "450px" }}>
          <MenuItem
            key={"" + key}
            title={prop.title}
            price={prop.price}
            src="https://static01.nyt.com/images/2019/09/16/dining/kwr-gyoza/merlin_160427046_9e2ab11e-f937-4f2e-a268-4f46b8480c73-articleLarge.jpg"
          />
        </Col>
      )
    }

    return images.restApiItemsRnhMenuSkewers.data.map((item, i) =>
      buildItem(i, item)
    )
  }

  return (
    <Layout>
      <SEO title="À La Carte | Online Ordering" />
      <div className="itemRow">{/* <Row>{buildItems()}</Row> */}</div>
    </Layout>
  )
}

export default TESTPAGE
