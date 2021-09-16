import React from "react";

/* a component to style a project's basic info on a project page */

export default function ProjectSummary(props) {
    return (
        <div className="team-summary">
            <h3>Description</h3>
            <p>{ props.description }</p>
            <h3>Team</h3>
            <p>{ props.team }</p>
            <h3>Community Partner</h3>
            <p>{ props.partner }</p>
            <h3>Timeline</h3>
            <p>{ props.timeline }</p>
        </div>
    );
}