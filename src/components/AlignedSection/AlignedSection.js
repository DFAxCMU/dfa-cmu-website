import React from "react";
import "./style.css";

/*  AlignedSection is a component that consistently styles sections with a left
    and right half splitting the screen in 40%, 60% or to a max of 400px (left side)
*/

export default function AlignedSection(props) {
    return (
        <div className="aligned-section" id={ props.id }>
            <div className="container">
            { props.hasCoverImage ?
                // If the left side is an image, insert props.img
                <div className="left-section">
                    { props.img }
                </div>
                :
                // Otherwise, insert title and body text
                <div className="left-section">
                    { props.title }
                    { props.altTitle }
                    { props.subTitle }
                    { props.body }
                </div>
            }
            <div className="right-section">
                { props.children }
            </div>
            </div>
        </div>
    );
}