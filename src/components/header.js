import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/ranken_logo.jpg"

export default ({}) => {
  const image = fetch(
    "https://cms.jadenswang.com/assets/155e9559-b9fd-4d6c-a560-cc291c4fcde1"
  )

  const Bar = styled.div`
    background-color: green;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const NavItem = styled.div`
    display: flex;

    background-color: blue;
  `

  const NavImage = styled.img``

  return (
    <>
      <Bar>
        <NavImage src="https://cms.jadenswang.com/assets/155e9559-b9fd-4d6c-a560-cc291c4fcde1/?=&width=80&height=80" />
        <NavItem>ABOUT US</NavItem>
        <NavItem>MENU</NavItem>
        <NavItem>LOCATIONS</NavItem>
        <NavItem>CONTACT US</NavItem>
      </Bar>
    </>
  )
}
