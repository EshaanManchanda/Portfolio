import React from 'react'
function Navbar() {
  return (
    <nav>
        <link rel="stylesheet" href="./css/navbar.css"></link>
    <div className="left">Eshaan's Portfolio</div>
    <div className="right">
        <ul>
            <a href="#">
                <li className="gradient-underline">Home</li>
            </a>
            <a href="/about.html">
                <li className="gradient-underline">About</li>
            </a>
            <a href="#section4">
                <li className="gradient-underline">Services</li>
            </a>
            <a href="#section3">
                <li className="gradient-underline">Projects</li>
            </a>
            <a href="#section5">
                <li className="gradient-underline">Contact Me</li>
            </a>
        </ul>
    </div>
</nav>
  )
}

export default Navbar
