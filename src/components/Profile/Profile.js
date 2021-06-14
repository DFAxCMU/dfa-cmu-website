import React from "react";

export default function Profile(props) {
    return (
        <div className="profile">
            <div className="profile-img">

            </div>
            <div className="profile-text">
                <h3 className="accent">{ props.role }</h3>
                <h3>{ props.name }</h3>
                <h4>{ props.class }</h4>
                <h4>{ props.major }</h4>
            </div>
        </div>
    );
}