import React from 'react'

function Section1() {
  return (
    <section id="section1">
        <link rel="stylesheet" href="./css/section1.css"></link>
        <h1>Experience</h1>
        <div id="section1-div">
            <div className="expDiv">
                <h4>2023</h4>
                <h5>Bachelor of Computer Applications</h5>
                <h6>Guru Gobind Singh Indraprastha University CGPA:7.4</h6>
                <button className="cta">
                    Read more <i className="ri-arrow-right-line"></i>
                </button>
            </div>
            <div className="expDiv">
                <h4>2023</h4>
                <h5>TRAINING JAVA PROGRAM</h5>
                <h6>Qspider ,Delhi
                    Java, Mysql and Webtech</h6>
                <button className="cta">
                    Read more <i className="ri-arrow-right-line"></i>
                </button>
            </div>
            <div className="expDiv">
                <h4>2022</h4>
                <h5>Internship Backend</h5>
                <h6>Doosra College
                    Django, Machine Learning</h6>
                <button className="cta">
                    Read more <i className="ri-arrow-right-line"></i>
                </button>
            </div>
            <div className="expDiv">
                <h4>2022</h4>
                <h5>Internship Frontend</h5>
                <h6>Tech Access
                    HTML, CSS, JS, and Bootstrap</h6>
                <button className="cta">
                    Read more <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
        <div id="section1-div2">
            <a href="/experience.html">
                <button className="button-border">
                    View All
                </button>
            </a>
        </div>
    </section>
  )
}

export default Section1
