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
      front_menu_image: file(relativePath: { eq: "main_page.png" }) {
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
          link="http://www.mealage.com/m.jsp?id=8155"
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
              <Link to="/menu">
                <Card
                  header={
                    <div
                      style={{
                        paddingTop: "7%",
                        paddingLeft: "5%",
                        width: "90%",
                        fontSize: "1.75em",
                      }}
                    >
                      Carry Out
                    </div>
                  }
                  actions={[
                    <Link
                      to="http://www.mealage.com/m.jsp?id=8155"
                      activeStyle={{ color: "#ff9900" }}
                    >
                      Order Now
                    </Link>,
                  ]}
                />
              </Link>
            </Col>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/menu" activeStyle={{ color: "#ff9900" }}>
                    Menu
                  </Link>,
                ]}
                header={
                  <Img fluid={images.front_menu_image.childImageSharp.fluid} />
                }
              ></Card>
            </Col>
            <Col s={4}>
              <Link to="">
                <Card
                  header={
                    <div
                      style={{
                        paddingTop: "7%",
                        paddingLeft: "5%",
                        width: "90%",
                        fontSize: "1.75em",
                      }}
                    >
                      Deliver
                    </div>
                  }
                  actions={[
                    <a
                      href="https://www.grubhub.com"
                      activeStyle={{ color: "#ff9900" }}
                    >
                      GrubHub
                    </a>,
                    <a
                      href="https://www.doordash.com"
                      activeStyle={{ color: "#ff9900" }}
                    >
                      DoorDash
                    </a>,
                  ]}
                />
              </Link>
            </Col>
          </Row>
        </Layout>
      </BrowserView>
      {mobileView}
    </>
  )
}

export default IndexPage
