import React from "react";
import "./style.css";

export default function ProjectCard(props) {
    /* interpret array of team roles */
    const teamRoles = [];
    const lines = props.team.map(arr => arr[0] + ": " + arr[1]);
    for (let line of lines) {
        teamRoles.push(line);
        teamRoles.push(<br />);
    }

    return (
        <div className="team-summary">
            <h3>Description</h3>
            <p>{ props.description }</p>
            <h3>Team</h3>
            <p>{ teamRoles }</p>
            <h3>Community Partner</h3>
            <p>{ props.partner }</p>
            <h3>Timeline</h3>
            <p>{ props.timeline }</p>
        </div>
    );
}