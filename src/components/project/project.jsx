import React from "react";

function Project({ id, title, deployURL, codeURL, imgURL, projectDetails }) {
    return (
        <div className="project">
            <h3 className="project-title">{title}</h3>
            {/* <a href={`${codeURL}`}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="git"/></a> */}
            <img src={`${imgURL}`} className="project-screenshot" />

            <div className="project-details">
                {`${projectDetails}`}
                <div className="button-links">
                <a href={`${deployURL}`}> See it live</a>
                <a href={`${codeURL}`}>GitHub </a>
                </div>
            </div>
        </div>

    )
}

export default Project;