import React from "react";
import "./project.scss";

function Project({id, title, deployURL, codeURL,imgURL}){
    return(
        <div className="project">
            <h3><a href={`${codeURL}`}>{title}</a></h3>
            <a href={`${codeURL}`}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="git"/></a>
            <a href={`${codeURL}`}><img src={`${imgURL}`} className="project-screenshot"/></a>
            <h4><a href={`${deployURL}`} > See it live! </a></h4>
        </div>
    )
}

export default Project;