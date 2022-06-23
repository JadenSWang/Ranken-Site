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
          title="Carry Out"
          subtitle="Skips the line. Saves time."
          body=""
          color="white"
          link="https://www.toasttab.com/ranken-noodle-house2/v3/?mode=fulfillment"
          textColor="#050505"
          label="Skips the line. Saves time."
        />
        <Section
          title="Delivery"
          subtitle="Uber Eats"
          body=""
          color="white"
          link="https://www.order.store/store/ranken-noodle-house/1w3MTFvkWPiK5vHPXYUrxw"
          textColor="#050505"
          label="Uber Eats"
        />
        <Section
          title="Delivery"
          subtitle="Doordash"
          body=""
          color="white"
          link="https://order.online/business/ranken-noodle-house-1055348"
          textColor="#050505"
          label="Doordash"
        />
        <Section
          title="Delivery"
          subtitle="Grubhub"
          body=""
          color="white"
          link="http://menus.fyi/3192292"
          textColor="#050505"
          label="Grubhub"
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