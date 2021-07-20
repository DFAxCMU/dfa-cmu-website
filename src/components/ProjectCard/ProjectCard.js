import React from "react";
import "./style.css";
import cover from "../../images/ymca-changemakers/cover.jpeg";

export default function ProjectCard(props) {
    return (
        <a
            href={ props.href }
            style={{textDecoration: "none"}}
        >
            <div className="project-card">
                <div className="project-img">
                    <img src={ cover } alt="" />
                </div>
                <div className="project-text">
                    <h2 className="accent">{ props.title }</h2>
                    <h4>{ props.category }</h4>
                    <h5>{ props.team }</h5>
                    <p className="small-body">{ props.body }</p>
                </div>
            </div>
        </a>
    );
}