import React, { useState } from "react"
import { Card, Icon } from "react-materialize"
import StaticImage from "gatsby-plugin-image"

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

const MenuItem = ({ title, price, addItem, removeItem, src }) => {
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
          <StaticImage
            imgStyle={{ alignItems: "center", justifyContent: "center" }}
            src="https://static01.nyt.com/images/2019/09/16/dining/kwr-gyoza/merlin_160427046_9e2ab11e-f937-4f2e-a268-4f46b8480c73-articleLarge.jpg"
          >
            test
          </StaticImage>
        }
      >
        $ {price}
      </Card>
    </>
  )
}

export default MenuItem
