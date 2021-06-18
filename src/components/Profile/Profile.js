import React from "react";
import "./style.css";

export default function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-img">

            </div>
            <div className="profile-text">
                <h4 className="accent"><b>{ props.role }</b></h4>
                <h4><b>{ props.name }</b></h4>
                <h5><b>{ props.class }</b></h5>
                <h5><b>{ props.major }</b></h5>
            </div>
        </div>
    );
}