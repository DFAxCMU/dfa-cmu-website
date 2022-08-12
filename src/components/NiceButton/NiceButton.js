import React from "react";
import Button from "../Button/Button";
import "./style.css";

/*  NiceButton is a component with a button on the left and a
    subheading + description on the right. The text description can be given as
    a string or as XML
*/

export default function NiceButton(props) {
    return (
        <div className="nice-button">
            <Button 
                text= {props.text}
                href= {props.href}
                />
            <div className="button-text">
                <h3 className="accent">{ props.title }</h3>
                { typeof props.body === "string" ? <p className="lightText">{ props.body }</p> : props.body }
            </div>
        </div>
    );
}