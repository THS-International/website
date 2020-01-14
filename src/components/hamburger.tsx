import React from "react"
import "./hamburger.css"

const hamburger = ({ setIsActive, isActive, color}) => {
  return (


    <div
      onClick={() => setIsActive(!isActive)}
      className={"hamburger hamburger--3dy " + (isActive ? "is-active" : "")}
    >
      <div className="hamburger-box">
        <div style={{backgroundColor: color}} className="hamburger-inner"></div>
      </div>
    </div>
  )
}
export default hamburger
