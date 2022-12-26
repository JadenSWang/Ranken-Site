import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import { BrowserView, MobileView } from "react-device-detect"
import { Card, Row, Col, Button } from "react-materialize"
import { createClient } from "contentful"
import Img from "gatsby-image"

const MobileOrderPage = () => {
  const mobileView = (
    <MobileView>
      <Layout>
        <Section
          title="Delivery Uber Eats"
          subtitle="Uber Eats"
          body=""
          color="white"
          link="https://www.order.store/store/ranken-noodle-house/1w3MTFvkWPiK5vHPXYUrxw"
          textColor="#050505"
          label="Uber Eats"
        />
        <Section
          title="Delivery Doordash"
          subtitle="Doordash"
          body=""
          color="white"
          link="https://order.online/business/ranken-noodle-house-1055348"
          textColor="#050505"
          label="Doordash"
        />
      </Layout>
    </MobileView>
  )

  return (
    <>
      <SEO title="Home" />
      <BrowserView></BrowserView>
      {mobileView}
    </>
  )
}

export default MobileOrderPage