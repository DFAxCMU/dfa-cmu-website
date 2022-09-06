import React from "react";
import "./style.css";

export default function Tag(props) {
    return (
            <div className="tag">
                <h5 className="tag-text"><b>{ props.text }</b></h5>
            </div>
    )
}