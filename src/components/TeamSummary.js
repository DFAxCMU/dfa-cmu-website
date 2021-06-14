import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="team-summary">
            <h3>Description</h3>
            <p>{ props.description }</p>
            <h3>Team</h3>
            {
                props.team.map(arr => 
                    <p key={ arr[0] }>{ arr[0] + ": " + arr[1] }</p>
                )
            }
            <h3>Community Partner</h3>
            <p>{ props.partner }</p>
            <h3>Timeline</h3>
            <p>{ props.timeline }</p>
        </div>
    );
}