import React from "react";
import "./style.css";

export default function ProjectTitle(props) {
    // replace \n in the string with <br />
    const addedBreaks = [];
    const lines = props.title.split("\\n");
    for (let line of lines) {
        addedBreaks.push(line);
        addedBreaks.push(<br />);
    }

    return (
        <div className="project-title">
            <h1 className="accent small-margin">{ addedBreaks }</h1>
            <h4 className="small-margin">{ props.timeline }</h4>
            <h5 className="small-margin">{ props.category }</h5>
        </div>
    );
}