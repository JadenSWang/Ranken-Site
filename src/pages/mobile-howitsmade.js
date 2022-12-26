import React, {useEffect, useState} from "react"

import SEO from "../components/seo"
import {BrowserView, MobileView} from "react-device-detect"
import {Card, Row, Col} from "react-materialize"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const MobileOrderPage = () => {
    const images = useStaticQuery(graphql`
    query {
      heavy_chart: file(relativePath: { eq: "heavy-chart.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      light_chart: file(relativePath: { eq: "light-chart.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    const mobileView = (
        <MobileView style={{paddingTop: "20px"}}>
            <Card
                title={"How RanKen Ramen Is Made"}
                style={{
                    width: "84vw",
                    marginLeft: "8vw",
                    marginTop: "2vh",
                    textAlign: "center",
                }}
            >
            </Card>
            <Card style={{
                width: "84vw",
                marginLeft: "8vw",
                marginTop: "2vh",
                textAlign: "center",
            }}>
                <b>Heavy Broth:</b> Tonkotsu and Chicken bone boiled on <i>high heat</i> for more than 10 hours
                resulting in a thick
                and
                rich white (heavy) broth ready for our Tonkotsu Ramen.
                <Img fluid={images.heavy_chart.childImageSharp.fluid}/>
            </Card>
            <Card style={{
                width: "84vw",
                marginLeft: "8vw",
                marginTop: "2vh",
                textAlign: "center",
            }}>
                <b>Light Broth:</b> Tonkotsu and Chicken bone <i>low heat</i> for around 6 hours resulting in a
                thinner, lighter broth ready for our miso ramen.
                <Img fluid={images.light_chart.childImageSharp.fluid}/>
            </Card>
        </MobileView>
    )

    return (
        <>
            <SEO title="How Its Made"/>
            <BrowserView></BrowserView>
            {mobileView}
        </>
    )
}

export default MobileOrderPage