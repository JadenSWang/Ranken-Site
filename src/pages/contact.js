import React from "react"
import { Row, Col, Card } from "react-materialize"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = props => {
  const images = useStaticQuery(graphql`
    query {
      front_menu_image: file(relativePath: { eq: "Front_Menu_Image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />
      <Row
        style={{
          marginTop: "5%",
          marginLeft: "10%",
          height: "80%",
          width: "80%",
        }}
      >
        <Col s={4}></Col>
        <Col s={4}>
          <Card
            actions={[
              <a href="mailto:info@rankennodlehouse.com">Email</a>,
              <a href="https://www.facebook.com/Ranken-Noodle-House-634157470564299/?">
                Facebook
              </a>,
            ]}
          >
            <h4>How are we doing?</h4>
          </Card>
        </Col>
        <Col s={4}></Col>
      </Row>
    </Layout>
  )
}

export default MenuPage
