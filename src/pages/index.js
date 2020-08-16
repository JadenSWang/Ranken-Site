import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import { BrowserView, MobileView } from "react-device-detect"
import { Card, Row, Col, CardTitle, Icon } from "react-materialize"

import front_menu_image from "../images/Front_Menu_Image.jpg"
import front_map from "../images/ranken_map.jpg"
import under_construction from "../images/under_construction.png"

const IndexPage = () => {
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
                header={<CardTitle image={front_menu_image}></CardTitle>}
              ></Card>
            </Col>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/" activeStyle={{ color: "#ff9900" }}>
                    Contact
                  </Link>,
                  <Link to="/" activeStyle={{ color: "#ff9900" }}>
                    Store Locator
                  </Link>,
                ]}
                header={<CardTitle image={front_map}></CardTitle>}
              ></Card>
            </Col>
            <Col s={4}>
              <Card
                actions={[
                  <Link to="/" activeStyle={{ color: "#ff9900" }}>
                    News
                  </Link>,
                ]}
                header={<CardTitle image={under_construction}></CardTitle>}
              ></Card>
            </Col>
          </Row>
        </Layout>
      </BrowserView>
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
            title="Delivery"
            subtitle="Enjoy ramen from the comforts of home, "
            body=""
            color="#404040"
            textColor="white"
            label="Order Now"
          />
          <br />
          <div style={{ color: "white" }}>ADDDRESSSS</div>
        </Layout>
      </MobileView>
    </>
  )
}

export default IndexPage
