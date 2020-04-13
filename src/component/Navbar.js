import React from "react";
import {Link} from 'react-router-dom';
const Navbar  = () => {
    return (
        <div>
<div className="top-banner">
      <div className="my-name" id="header-font">
       <h2><a href="./index.html">Armande L. Milhouse</a></h2>
      </div>
      <div className="headlinks">
        <Link href="/about">ABOUT</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/contact">CONTACT</Link>
    </div>
  </div>
        </div>
    )
}
export default Navbar