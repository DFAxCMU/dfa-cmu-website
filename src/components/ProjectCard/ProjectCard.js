import React from "react";
import "./style.css";

export default function ProjectCard(props) {
    return (
        <a href="/ymca-changemakers">
            <div className="project-card">
                <div className="project-img">

                </div>
                <div className="project-text">
                    <h2>{ props.title }</h2>
                    <h4>{ props.category }</h4>
                    <h5>{ props.team }</h5>
                    <p>{ props.body }</p>
                </div>
            </div>
        </a>
    );
}