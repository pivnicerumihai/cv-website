import React from "react";

import Project from "../project/project"

import PROJECTS_DATA from "./projects.data";

function Projects(){
    return(
        <div className="projects" id="projects">
            <h2 style={{color:"#0377D7"}}>Projects</h2>
        <div className="project-items">
           {
               PROJECTS_DATA.map( el=> <Project 
                key={el.id}
                title={el.title}
                codeURL={el.codeURL}
                deployURL={el.deployURL}
                imgURL={el.imgURL}
                projectDetails={el.projectDetails}/>)
           }
        </div>
        </div>
    )
}

export default Projects;