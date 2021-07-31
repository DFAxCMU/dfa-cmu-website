import React from "react";
import "./style.css";

export default function Button(props) {
    const customButton = {
        height: props.height + "px",
        width: props.width
    };
    const customHeading = {
        marginTop: "0px",
        marginBottom: "0px",
        paddingTop: (parseInt(props.height) / 2 - 14) + "px",
        paddingBottom: (parseInt(props.height) / 2 - 14) + "px"
    }

    return (
        <a
            href={ props.href }
            target="_blank_"
            style={{ textDecoration: "none" }}
        >
            <div className="button" style={ customButton }>
                <h5 style={ customHeading }><b>{ props.text }</b></h5>
            </div>
        </a>
    )
}