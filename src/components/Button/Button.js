import React from "react";
import "./style.css";

export default function Button(props) {
    return (
        <a
            href={ props.href }
            target="_blank_"
            style={{ textDecoration: "none" }}
        >
            <div className="button">
                <h5 className="button-text"><b>{ props.text }</b></h5>
            </div>
        </a>
    )
}