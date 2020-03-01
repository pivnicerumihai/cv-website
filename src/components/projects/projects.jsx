import React from "react";
import "./projects.scss";

import Project from "../project/project"

import PROJECTS_DATA from "./projects.data";

function Projects(){
    return(
        <div className="projects">
            <h2>Projects</h2>
        <div className="project-items">
           {
               PROJECTS_DATA.map( el=> <Project 
                key={el.id}
                title={el.title}
                codeURL={el.codeURL}
                deployURL={el.deployURL}
                imgURL={el.imgURL}/>)
           }
        </div>
        </div>
    )
}

export default Projects;