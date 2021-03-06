import React from "react";
import "./style.css";

/* a component to format information for an exec board member */

export default function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-img">
                { props.img }
            </div>
            <div className="profile-text">
                <h4 className="accent role-text"><b>{ props.role }</b></h4>
                <h4 className = "name-text"><b>{ props.name }</b></h4>
                <h5 className = "class-text"><b>{ props.class }</b></h5>
                <h5 className = "major-text"><b>{ props.major }</b></h5>
            </div>
        </div>
    );
}