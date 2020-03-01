import React from "react";
import "./container.scss";

import Navbar from "../navbar/Navbar"
import Home from "../home/home"
import Aboutme from "../aboutme/aboutme"
import Projects from "../projects/projects";

function Container() {


    return(
        <div className="container"> 
        <Navbar />
        <Home/>
        <Aboutme/>
        <Projects />
        </div>
    )
}

export default Container;