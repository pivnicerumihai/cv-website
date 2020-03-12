import React from "react";

import Navbar from "../navbar/Navbar"
import Home from "../home/home"
import Aboutme from "../aboutme/aboutme"
import Projects from "../projects/projects";
import Contact from "../contact/contact";

function Container() {

    return(
        <div className="container"> 
        <Navbar />
        <Home />
        <Aboutme />
        <Projects/>
        <Contact />
        </div>
    )
}

export default Container;