import React, { useEffect } from "react"

import "../css/hamburger.css"

const Hamburger = () => {
  useEffect(() => {
    const script = document.createElement("script")

    script.innerHTML =
      '\r\n    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};\r\n\r\n    var hamburgers = document.querySelectorAll(".hamburger");\r\n    if (hamburgers.length > 0) {\r\n      forEach(hamburgers, function(hamburger) {\r\n        hamburger.addEventListener("click", function() {\r\n          this.classList.toggle("is-active");\r\n        }, false);\r\n      });\r\n    }'
    script.async = true

    document.body.appendChild(script)
  })

  return (
    <>
      <div className="hamburger hamburger--spin" style={{ width: "5vw" }}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </>
  )
}

export default Hamburger
