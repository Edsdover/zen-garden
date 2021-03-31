import React from "react"
import { Link } from 'react-router-dom';

import data from '../json/earthquakes.json';

import "../css/header.css";

const Header = () => {

  const headerStyle = {
    display: "flex",
    background: "#ededed",
    padding: "20px 0",
    lineHeight: "1.5em",
    height: "100px",
  }
  // Just doing different stlye methods here, however I prefer to make a new file when needed.
  return (
    <div>
      <header className='header' style={headerStyle}>
        <Link className='homeLink' to='/'><img className='homeLinkImg' alt='Home' src='https://www.realtor.com/realtor-com.png'></img></Link>
        <h1 style={{ fontSize: "2rem", fontWeight: "600", lineHeight: "1em", color: "#777777", textAlign: "center" }}>Earthquake Zen Garden</h1>
        <Link className='profileLink' to='/profile'>Welcome {data.profile.firstName}</Link>
      </header>
    </div>
  )
}

export default Header