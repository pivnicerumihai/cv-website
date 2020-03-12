import React from "react";
import { Link } from "react-scroll";

import Button from "../button/button"

function Navbar() {
    return (
        <div className="navbar">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Button>Home</Button>
            </Link>
            <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Button>About Me</Button></Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Button>Projects</Button></Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <Button>Contact</Button></Link>
        </div>
    )
}

export default Navbar;