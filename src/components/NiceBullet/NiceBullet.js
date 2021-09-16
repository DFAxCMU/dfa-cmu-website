import React from "react";
import "./style.css";

/*  NiceBullet is a component with a small 100x100 thumbnail on the left and a
    subheading + description on the right. The text description can be given as
    a string or as XML
*/

export default function NiceBullet(props) {
    return (
        <div className="nice-bullet">
            <div className="bullet-img">
                { props.img }
            </div>
            <div className="bullet-text">
                <h3 className="accent">{ props.title }</h3>
                { typeof props.body === "string" ? <p>{ props.body }</p> : props.body }
            </div>
        </div>
    );
}