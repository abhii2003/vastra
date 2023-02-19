import React from "react";
import "./homepage.css";
import InfoPage1 from "../infopages/infopage1";

export default function HomePage() {
    return (
        <>
            <section id="homePage">
                <div className="homePageText">
                    <div class="container ">
                        <h1 class="title">
                            <div class="word">
                                <div class="char" data-char="V">V</div>
                                <div class="char" data-char="A">A</div>
                                <div class="char" data-char="S">S</div>
                                <div class="char" data-char="T">T</div>
                                <div class="char" data-char="R">R</div>
                                <div class="char" data-char="A">A</div>
                            </div>
                        </h1>
                    </div>
                    <p className="homePageSubTitle">
                        The best place to buy clothes online
                    </p>
                    <button type="button" class="button">SHOP NOW</button>
                </div>
            </section>
            <InfoPage1 />
        </>
    );
}