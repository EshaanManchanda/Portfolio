import React, { useState } from 'react'
function Header() {
    const [cForm, setIsForm] = useState(false);
    const [styleD,setStyle]=useState("form-popup");
    const toggleVisibility = () => {
        if(cForm==false)
        {
            setStyle("form-popup");
        }
        else
        {
            setStyle("from-popup-open");
        }
        setIsForm(!cForm);
        console.log(cForm);

    };

    

    return (
        <header id='top'>
            <link rel="stylesheet" href="./css/header.css"></link>
            <link rel="stylesheet" href="./css/popupForm.css"></link>
            <div id='header-div'>
                <h4>I'am</h4>
                <h1>Eshaan Manchanda</h1>
                <h3>Backend Developer</h3>
                <div>
                    <button className="button-skw" onClick={toggleVisibility}>Hire Me</button>
                    <div className={styleD} id="myForm">
                        <form action="#" className="form-container">
                            <h1>Contact details</h1>
                            <label htmlFor="name"><b>Name</b></label>
                            <input type="text" placeholder="Enter Name" name="name" required />
                            <label htmlFor="phone"><b>Contact No.</b></label>
                            <input type="tel" placeholder="Enter Number" name="phone" required />
                            <label htmlFor="Message"><b>Message</b></label>
                            <input type="text" placeholder="Enter message" name="message" required />
                            <button type="submit" className="btn">submit</button>
                            <button type="button" className="btn cancel" onClick={toggleVisibility}>Close</button>
                        </form>

                    </div>

                    <button className="button-skw">Contact Me</button>
                </div>
            </div>
        </header>
    )
}

export default Header
