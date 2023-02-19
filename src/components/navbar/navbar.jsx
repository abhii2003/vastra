import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Nav() {
    return (
        <div className="nav-container">
            <div className="titletop">
                <div className="searchbar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="searchsvg"><path fill="#E8E8E8" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>

                    <input className="search" placeholder="        search" />
                </div>

                <h1 className="logo">VASTRA</h1>
                <nav className="navlisttop">
                    <ul className="navList">
                        <li className="nav-items navTextop" id="account">
                            <NavLink
                                to={{ pathname: "/account" }}
                                className=" navText"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="accountsvg"><path fill="#E8E8E8" d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z" /></svg>
                                Account
                            </NavLink>
                        </li>
                        <li className="nav-items navTexttop" id="cart">
                            <NavLink
                                to={{ pathname: "/cart" }}
                                className=" navText"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cartsvg"><path fill="#E8E8E8" d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z" /></svg>
                                Cart
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
            <nav>
                <ul className="navList">
                    <li className="nav-items" id="Home">
                        <NavLink
                            to={{ pathname: "/home" }}
                            className="navButton navText"
                        >
                            HOME
                        </NavLink>
                    </li>

                    <li className="nav-items" id="Clothing">
                        <NavLink
                            to={{ pathname: "/clothing" }}
                            className="navButton navText"
                        >
                            CLOTHING
                        </NavLink>
                    </li>

                    <li className="nav-items" id="Styles">
                        <NavLink
                            to={{ pathname: "/styles" }}
                            className="navButton navText"
                        >
                            TAKE STYLE
                        </NavLink>
                    </li>

                    <li className="nav-items" id="Sustainability">
                        <NavLink
                            to={{ pathname: "/sustainability" }}
                            className="navButton navText"
                        >
                            SUSTAINABILITY
                        </NavLink>
                    </li>



                    <li className="nav-items part2" id="Contact">
                        <NavLink to="/contactus" className="navButton navText">
                            CONTACT US
                        </NavLink>
                    </li>


                </ul>
            </nav>
        </div>
    );
}
