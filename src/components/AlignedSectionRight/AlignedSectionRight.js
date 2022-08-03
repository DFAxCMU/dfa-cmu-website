import React from "react";
import "./style.css";

/*  AlignedSectionRight is a component that consistently styles sections with a left
    and right half splitting the screen in 60%, 40% or to a max of 400px (right side)
*/

export default function AlignedSectionRight(props) {
    return (
        <div className="aligned-section-right" id={ props.id }>
            { props.hasCoverImage ?
                // If the left side is an image, insert props.img
                <div className="left-section-right">
                    { props.img }
                </div>
                :
                // Otherwise, insert title and body text
                <div className="left-section-right">
                    <h3 className="accent">{ props.title }</h3>
                    <h3>{ props.altTitle }</h3>
                    <h4 className="accent">{ props.subTitle }</h4>
                    <p>{ props.body }</p>
                </div>
            }
            <div className="right-section-right">
                { props.children }
            </div>
        </div>
    );
}