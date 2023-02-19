import React from 'react';
import './footer.css';
export default function Footer() {
    return (
        <>
            <footer id='footer'>
                <div className="footertext">
                    <b> CREATE A WARDROBE YOU LOVE </b><br />
                    We create versatile capsule collections of 5 items that make 30 different outfits. Made with you and the planet in mind.<br />

                    Take alook at our<b>  AR feature </b>to see how our clothes look on you!
                </div>
                <div className='footertext2'>
                    <h2>BECOME AN INSIDER</h2>
                    <p>Sign up for 10% off your first order + early access.</p>
                    <input className="search footerinput" placeholder="Enter Email" /><br />
                    <button className='button2 footerbutton'>SIGN UP</button>
                </div>

            </footer>


        </>
    );
}