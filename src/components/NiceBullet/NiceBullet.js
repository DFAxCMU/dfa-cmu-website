import React from "react";

export default function NiceBullet(props) {
    return (
        <div className="nice-bullet">
            <div className="bullet-img">

            </div>
            <div className="bullet-text">
                <h3 className="accent">{ props.title }</h3>
                <p>{ props.body }</p>
            </div>
        </div>
    );
}