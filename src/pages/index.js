import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import { BrowserView, MobileView } from "react-device-detect"
import { Card, Row, Col } from "react-materialize"
import Img from "gatsby-image"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    query {
      front_menu_image: file(relativePath: { eq: "Front_Menu_Image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      front_map: file(relativePath: { eq: "ranken_map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      under_construction: file(relativePath: { eq: "under_construction.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const mobileView = (
    <MobileView>
      <Layout>
        <Section
          title="Dine In"
          subtitle="Authentic ramen. Simmered to perfection."
          body=""
          to="menu"
          color="#0F0F0F"
          textColor="white"
          label="Menu"
        />
        <Section
          title="Carry Out"
          subtitle="Zero fees. Skips the line. Saves time."
          body=""
          color="white"
          textColor="#050505"
          label="Order Now"
        />
        <Section
          title="Locate"
          subtitle="Find some Ramen Near You!"
          body=""
          to="locate"
          color="#404040"
          textColor="white"
          label="Find some Ramen Near You!"
        />
      </Layout>
    </MobileView>
  )

  return (
    <>
      <SEO title="Home" />
      <BrowserView>
        <Layout>
          <Row style={{ width: "80%", marginTop: "5%" }}>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/menu" activeStyle={{ color: "#ff9900" }}>
                    Menu
                  </Link>,
                  <Link to="/" activeStyle={{ color: "#ff9900" }}>
                    Order Online
                  </Link>,
                ]}
                header={
                  <Img fluid={images.front_menu_image.childImageSharp.fluid} />
                }
              ></Card>
            </Col>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/contact" activeStyle={{ color: "#ff9900" }}>
                    Contact
                  </Link>,
                  <Link to="/locate" activeStyle={{ color: "#ff9900" }}>
                    Store Locator
                  </Link>,
                ]}
                header={<Img fluid={images.front_map.childImageSharp.fluid} />}
              ></Card>
            </Col>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/" activeStyle={{ color: "#ff9900" }}>
                    News
                  </Link>,
                ]}
                header={
                  <Img
                    fluid={images.under_construction.childImageSharp.fluid}
                  />
                }
              ></Card>
            </Col>
          </Row>
        </Layout>
      </BrowserView>
      {mobileView}
    </>
  )
}

export default IndexPage
