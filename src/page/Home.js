import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'
export default class Home extends Component {
  componentDidMount() {
    const scrollTop = document.getElementById("scrolltop")
    //when the page is loaded , hide the scroll to top button
    window.onload = () => {
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = "0";
    }
    // if the page is scrolled more than 200px
    // show the scroll to top button 
    // otherwise hide the button
    window.onscroll = () => {
      if (window.scrollY > 200) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = "1";
      }
      else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = "0";
      }
    }
  }
  render() {
    return (
      <body>
        <Navbar />
        <Header />
        {/* <!-- Experience --> */}
        <Section1 />
        {/* Skills and progress bar */}
        <Section2/>
        {/* projects with screen shots */}
        <Section3/>
        {/* section service */}
        <Section4/>
        <Section5/>
        <Footer/>
        {/*<!-- scroll top icon --> */}
        <div id="scrolltop">
          <a href="#top" class="top_button">
            <i class="ri-arrow-up-s-line"></i>
          </a>
        </div>
      </body>
    )
  }
}
