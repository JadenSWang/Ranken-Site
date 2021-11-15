import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import { BrowserView, MobileView } from "react-device-detect"
import { Card, Row, Col, Button } from "react-materialize"
import { createClient } from "contentful"
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

  const [motd, setMotd] = useState("")

  useEffect(() => {
    const client = createClient({
      space: "sx5t0xh6rk72",
      environment: "master", // defaults to 'master' if not set
      accessToken: "S3jStNatOBM6kBUkySQx2THkeMpAh2hdD3GnJ_-6urM",
    })

    client
      .getEntries()
      .then(response => setMotd(response.items[0].fields.motd))
      .catch(console.error)
  }, [])

  const mobileView = (
    <MobileView>
      <Layout>
        <Section
          title={motd}
          body=""
          to="/"
          color="#0F0F0F"
          textColor="white"
        />
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
          link="https://www.mealage.com/m.jsp?id=8155"
          textColor="#050505"
          label="Order Now"
        />
        <Section
          title="Delivery"
          subtitle="Zero fees. Skips the line. Saves time."
          body=""
          color="white"
          link="https://www.ubereats.com/store/ranken-noodle-fhouse/1w3MTFvkWPiK5vHPXYUrxw"
          textColor="#050505"
          label="Get it Delivered Now"
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
            <Col s={2} />
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
              <div
                style={{
                  height: "50%",
                  marginTop: "20%",
                  paddingTop: 150,
                  paddingBottom: 200,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "calibri",
                    fontSize: "2em",
                    width: "88%",
                    marginLeft: "6%",
                    marginBottom: 50,
                  }}
                >
                  Authentic Japenese Cuisine you'll fall in love with.
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "col",
                  }}
                >
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://www.mealage.com/m.jsp?id=8155"
                    }}
                    style={{
                      borderWidth: 10,
                      textAlign: "center",
                      borderWidth: 10,
                      width: 200,
                      backgroundColor: "orange",
                      marginRight: 20,
                    }}
                  >
                    CARRY OUT
                  </Button>
                  <Button
                  onClick = {() => {
                    window.location.href="https://www.ubereats.com/store/ranken-noodle-house/1w3MTFvkWPiK5vHPXYUrxw"
                  }}
                    style={{
                      borderWidth: 10,
                      textAlign: "center",
                      backgroundColor: "orange",
                      borderWidth: 10,
                      width: 200,
                    }}
                  >
                    DELIVER
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "col",
                    marginTop: 40,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "calibri",
                      fontSize: "1.2em",
                      marginLeft: "6%",
                      textAlign: "center",
                    }}
                  >
                    Chef Li's Message: "{motd}"
                  </div>
                </div>
              </div>
            </Col>
            <Col s={2} />
          </Row>
        </Layout>
      </BrowserView>
      {mobileView}
    </>
  )
}

export default IndexPage