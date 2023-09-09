import React from 'react'

function Section2() {
    return (
        <section id="section2">
            <link rel="stylesheet" href="./css/skillbar.css"></link>
            <div>
                <h1> Skills &</h1>
                <h1>Proficiencies</h1>
            </div>
            <div id="section2-skillbar">
                <div className="skills-bar">
                    <h3>Technical Skills</h3>
                    <div className="bar">
                        <div className="info">
                            <h4>Frontend</h4>
                            <span>HTML, CSS, Bootstrap</span>
                        </div>
                        <div className="progress-line frontend"><span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <h4>Backend</h4>
                            <span>C, C++, Java, Python</span>
                        </div>
                        <div className="progress-line backend"><span></span></div>
                    </div>
                </div>
                <div className="skills-bar">
                    <h3>Languages</h3>
                    <div className="bar">
                        <div className="info">
                            <span>Hindi (Native)</span>
                        </div>
                        <div className="progress-line hindi"><span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>English</span>
                        </div>
                        <div className="progress-line english"><span></span></div>
                    </div>
                </div>
            </div>
            <div id="section1-div2">
                <button className="button-border">
                    View All
                </button>
            </div>
        </section>
    )
}

export default Section2
