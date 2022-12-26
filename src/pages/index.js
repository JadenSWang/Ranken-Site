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

  const mobileView = (
    <MobileView>
      <Layout backgroundImage={images.front_menu_image.childImageSharp.fluid}>
        <Section
          title={'How its made'}
          label="Read about it here"
          body=""
          to="mobile-howitsmade"
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
          link="https://www.toasttab.com/ranken-noodle-house2/v3/?mode=fulfillment"
          textColor="#050505"
          label="Order Now"
        />
        <Section
          title="Delivery"
          subtitle="Zero fees. Skips the line. Saves time."
          body=""
          color="white"
          to="mobile-ordernow"
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
            <Col s={1} />
            <Col s={5}>
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
            <Col s={5} style={{ height: "70vh" }}>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: 120 }}>
                <div
                  style={{
                    fontFamily: "calibri",
                    fontSize: "2em",
                    textAlign: "center"
                  }}
                >
                  Authentic Japanese Cuisine you'll fall in love with.
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", paddingTop: 60 }}>
                  <div style={{ display: "flex", flexDirection: "column", height: "11vh", justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        window.location.href = "https://www.toasttab.com/ranken-noodle-house2/v3/?mode=fulfillment"
                      }}
                      style={{
                        textAlign: "center",
                        backgroundColor: "orange",
                        borderWidth: 10,
                        width: "12vw",
                      }}>Carry Out</Button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", height: "18vh", justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        window.location.href = "https://www.order.store/store/ranken-noodle-house/1w3MTFvkWPiK5vHPXYUrxw"
                      }}
                      style={{
                        borderWidth: 10,
                        textAlign: "center",
                        backgroundColor: "orange",
                        width: "12vw",
                      }}>Uber Eats</Button>
                    <Button
                      onClick={() => {
                        window.location.href = "https://order.online/business/ranken-noodle-house-1055348"
                      }}
                      style={{
                        textAlign: "center",
                        backgroundColor: "orange",
                        borderWidth: 10,
                        width: "12vw",
                      }}>DoorDash</Button>
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