import React from "react";
import "./style.css";

export default function NiceBullet(props) {
    return (
        <div className="nice-bullet">
            <div className="bullet-img">

            </div>
            <div className="bullet-text">
                <h3 className="accent">{ props.title }</h3>
                <p className="small-body">{ props.body }</p>
            </div>
        </div>
    );
}