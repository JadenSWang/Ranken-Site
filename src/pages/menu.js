import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuItem from "../components/menuitem.js"

import { Icon } from "react-materialize"

const CartIcon = ({ numTotalItems, onClick }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "inline-block",
          marginTop: "12vh",
          marginLeft: "5vw",
        }}
        onClick={onClick}
      >
        <Icon medium>local_dining</Icon>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#DDD",
            display: "inline-block",
            borderRadius: "50%",

            marginLeft: "-8px",
            marginTop: "-15px",
            paddingTop: "3px",
            position: "absolute",

            textAlign: "center",
          }}
        >
          {numTotalItems}
        </div>
      </div>
    </>
  )
}

const MenuPage = () => {
  const [numTotalItems, setItems] = useState(0)

  const addItem = () => {
    setItems(numTotalItems + 1)
  }

  const removeItem = () => {
    setItems(numTotalItems - 1)
  }

  return (
    <Layout>
      <SEO title="Online Ordering" />
      <MenuItem
        title="Ramen #1"
        price={9.95}
        addItem={addItem}
        removeItem={removeItem}
      />
      <MenuItem
        title="Ramen #2"
        price={9.95}
        addItem={addItem}
        removeItem={removeItem}
      />
      <MenuItem
        title="Ramen #3"
        price={9.95}
        addItem={addItem}
        removeItem={removeItem}
      />
      <MenuItem
        title="Ramen #4"
        price={9.95}
        addItem={addItem}
        removeItem={removeItem}
      />

      {/* cart icons */}
      <CartIcon
        numTotalItems={numTotalItems}
        addItem={addItem}
        removeItem={removeItem}
        onClick={() => {
          console.log("test")
        }}
      />
    </Layout>
  )
}

export default MenuPage
