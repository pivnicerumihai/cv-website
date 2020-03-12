import React from "react";

function Aboutme() {
    return (
        <div className="aboutme" id="aboutme">
            <div>
                <h1>Hi, I'm Mihai.</h1>
                <p>I began my journey learning web-development almost two years ago.<br /> Most of my knowledge I got it by watching videos, tutorials, reading documentations and writing code.<br /> Some of my projects can be seen in the section below. </p>
            </div>
            <div className="skills">
                <div className="front-end">
                    <img src="https://i.ibb.co/xDMvWZn/5-512-removebg-preview.png" />
                    <p>Front-End Skills </p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>ReactJS(incl. Redux)</li>
                    </ul>
                </div>
                <div className="back-end">
                    <img src="https://i.ibb.co/HDZ5h98/seo-and-web-outline-28-20-512-removebg-preview.png" />
                    <p>Back-End Skills(incl. Databases)</p>
                    <ul>
                        <li>NodeJS ( ExpressJS )</li>
                        <h4>Databases</h4>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Aboutme;