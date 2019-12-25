import React from "react"
import "./hamburger.css"

const hamburger = ({ setIsActive, isActive }) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={"hamburger hamburger--3dy " + (isActive ? "is-active" : "")}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  )
}
export default hamburger
