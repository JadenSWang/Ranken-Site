import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Bar = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-left: 10px;
  padding-right: 200px;
`

const NavItem = styled(Link)`
  // get rid of the underline
  text-decoration: none;

  display: flex;
  font-family: Lora;
  color: #654321;
  font-size: 24px;
`

const NavImage = styled(Img)`
  margin-top: 70px;
  width: 150px;
  height: 150px;
`

const StyledCarousel = styled(Carousel)`
  background-color: #d2b48cff;
`

const PositionCarousel = styled.div`
  margin-top: 15vh;
  margin-left: 22vw;
  height: 30vh;
  width: 56vw;
`

export default ({}) => {
  const data = useStaticQuery(graphql`
    query {
      siteMetadata {
        logoImage {
          childImageSharp {
            fluid(maxWidth: 120, maxHeight: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Bar>
        <NavImage fluid={data.siteMetadata.logoImage.childImageSharp.fluid} />
        {/* <NavImage src="https://cms.jadenswang.com/assets/155e9559-b9fd-4d6c-a560-cc291c4fcde1/?=&width=80&height=80" /> */}
        <NavItem>ABOUT US</NavItem>
        <NavItem>MENU</NavItem>
        <NavItem>LOCATIONS</NavItem>
        <NavItem>CONTACT US</NavItem>
      </Bar>

      <PositionCarousel>
        <StyledCarousel
          centerMode
          centerSlidePercentage={70}
          infiniteLoop
          autoPlay
          stopOnHover
          dynamicHeight
        >
          <div>
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/8/4/WU1004H_Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1428675741536.jpeg"
              alt=""
            />
            <p className="legend">TESTING 1</p>
          </div>
          <div>
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/1/FN_Picky-Eaters-Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383770571120.jpeg"
              alt=""
            />
            <p className="legend">TESTING 4</p>
          </div>
        </StyledCarousel>
      </PositionCarousel>
    </>
  )
}
