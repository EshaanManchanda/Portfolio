import React from 'react'

function Section5() {
  return (
    <section id="section5">
        <link rel="stylesheet" href="./css/section5.css"/>
        <h1>Contact Me</h1>
        <div className="wrapper centered">
            <form className="letter">
                <div className="side">
                    <h1 className="contact-h1">Contact us</h1>
                    <p className="contact-p">
                        <textarea placeholder="Your message"></textarea>
                    </p>
                </div>
                <div className="side">
                    <p className="contact-p">
                        <input type="text" placeholder="Your name" required/>
                    </p>
                    <p className="contact-p">
                        <input type="email" placeholder="Your email" required/>
                    </p>
                    <p className="contact-p">
                        <button id="sendLetter" type="submit">Send</button>
                    </p>
                </div>
            </form>
            <div className="envelope front"></div>
            <div className="envelope back"></div>
        </div>
    </section>
  )
}

export default Section5
