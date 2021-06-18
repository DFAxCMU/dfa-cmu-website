import React from "react";
import "./style.css";

export default function ProjectCard(props) {
    // replace \n in the string with <br />
    const addedBreaks = [];
    const lines = props.team.split("\n");
    for (let line of lines) {
        addedBreaks.push(line);
        addedBreaks.push(<br />);
    }

    return (
        <div className="team-summary">
            <h3>Description</h3>
            <p>{ props.description }</p>
            <h3>Team</h3>
            <p>{ addedBreaks }</p>
            <h3>Community Partner</h3>
            <p>{ props.partner }</p>
            <h3>Timeline</h3>
            <p>{ props.timeline }</p>
        </div>
    );
}