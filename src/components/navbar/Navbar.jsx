import React from "react";
import {Link, animateScroll} from "react-scroll";
import "./navbar.scss"

import Button from "../button/button"

function Navbar() {
    return(
        <div className="navbar">
            <Button>Home</Button>
            <Button>About Me</Button>
            <Button>Projects</Button>
            <Button>Contact</Button>
        </div>
    )
}

export default Navbar;