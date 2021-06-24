import React, { useState } from "react"
import { Card, Icon } from "react-materialize"
import Img from "gatsby-image"

const AmountField = ({ marginLeft, amount }) => {
  return (
    <div
      id="inputField"
      style={{
        height: "25px",
        width: "25px",
        display: "inline-block",

        paddingLeft: "0.5px",
        paddingTop: "0.5px",
        position: "absolute",
        textAlign: "center",
        marginLeft: marginLeft,
      }}
    >
      {amount}
    </div>
  )
}

const MiniButton = ({ children, color, marginLeft, onClick }) => {
  return (
    <>
      <button
        style={{
          height: "25px",
          width: "25px",
          backgroundColor: "#DDD",
          display: "inline-block",
          borderRadius: "50%",

          paddingLeft: "0.5px",
          paddingTop: "0.5px",
          position: "absolute",
          marginLeft: marginLeft,

          boxShadow: "0px 0px 0px transparent",
          border: "0px solid transparent",
          textShadow: "0px 0px 0px transparent",
        }}
        onClick={onClick}
        onKeyDown={onClick}
      >
        {children}
      </button>
    </>
  )
}

const MenuItem = ({ title, price, addItem, removeItem, picture }) => {
  const [amount, setAmount] = useState(0)

  const MINUSBUTTON = (
    <MiniButton
      onClick={() => {
        setAmount(amount - 1)
        removeItem()
      }}
    >
      <Icon>remove</Icon>
    </MiniButton>
  )

  const AMOUNTFIELD = <AmountField amount={amount} />

  const PLUSBUTTON = (
    <MiniButton
      onClick={() => {
        setAmount(amount + 1)
        addItem()
      }}
    >
      <Icon>add</Icon>
    </MiniButton>
  )

  return (
    <>
      <Card
        title={title}
        actions={
          [
            // amount > 0 ? MINUSBUTTON : <></>,
            // amount > 0 ? AMOUNTFIELD : <></>,
            // PLUSBUTTON,
          ]
        }
        header={
          <Img
            imgStyle={{ alignItems: "center", justifyContent: "center" }}
            fluid={picture}
          >
            test
          </Img>
        }
      >
        $ {price}
      </Card>
    </>
  )
}

export default MenuItem
