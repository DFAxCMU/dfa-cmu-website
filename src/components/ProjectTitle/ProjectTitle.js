import React from "react";
import "./style.css";

export default function ProjectTitle(props) {
    return (
        <div className="project-title">
            <h1 className="accent small-margin">{ props.title }</h1>
            <h4 className="small-margin">{ props.timeline }</h4>
            <h5 className="small-margin">{ props.category }</h5>
        </div>
    );
}