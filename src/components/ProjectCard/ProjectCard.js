import React from "react";
import "./style.css";

export default function ProjectCard(props) {
    return (
        <a
            id={ props.id }
            href={ props.href }
            style={{textDecoration: "none"}}
        >
            <div className="project-card">
                <div className="project-img">

                </div>
                <div className="project-text">
                    <h2>{ props.title }</h2>
                    <h4>{ props.category }</h4>
                    <h5>{ props.team }</h5>
                    <p className="small-body">{ props.body }</p>
                </div>
            </div>
        </a>
    );
}