import React from "react";
import "./infopage.css";
const img12 = require("../infopages/12.jpg");
const img4 = require("../infopages/4.jpg");

export default function InfoPage1() {
    return (
        <>
            <section id="sec1">
                <div className="infoimage">
                    <img className="infoimage" src={img4} />
                </div>
                <div className="infotext">
                    <h1>MADE WITH YOU + THE PLANET IN MIND</h1>
                    We work hard to be sustainable in every aspect of our business. Our garments are made in factories in the India, or in fair trade certified factories. We use sustainable fabrics, such as GOTS organic cotton and Lenzing Tencel. Our packaging is made from recycled materials. We also have launched The VASTRA Archive shop, where you can buy and sell pre-worn VASTRA pieces at a reduced price. Check it out below!
                    <button className="button">THE VASTRA ARCHIVE SHOP</button>
                </div>
            </section>
            <section id="sec2">
                <div className="infotextsec2">

                    Build a custom timeless wardrobe that you'll be wearing for years to come!<br />
                    <p className="pname">-Val</p>
                </div>
                <div className="infoimage2">
                    <img className="infoimage2" src={img12} />
                </div>

            </section>
        </>
    );
}
