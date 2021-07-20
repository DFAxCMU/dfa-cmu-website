import React from "react";
import "./style.css";

export default function NiceBullet(props) {
    return (
        <div className="nice-bullet">
            <div className="bullet-img">
                <img src={ props.src } alt="" />
            </div>
            <div className="bullet-text">
                <h3 className="accent">{ props.title }</h3>
                { typeof props.body === "string" ? <p>{ props.body }</p> : props.body }
            </div>
        </div>
    );
}