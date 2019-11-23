import React from "react"
import { Link } from "gatsby";
import './drawer.css';

const drawer = () => {
  return (
    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <Link to="/">Home</Link>
        <Link to="/">Reception 2020</Link>
        <Link to="/">Team</Link>
        <Link to="/">News</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  )
}

export default drawer
