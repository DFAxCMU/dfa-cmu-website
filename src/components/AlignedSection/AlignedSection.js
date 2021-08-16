import React from "react";
import "./style.css";

/*  AlignedSection is a component that consistently styles sections with a left
    and right half
*/

export default function AlignedSection(props) {
    return (
        <div className="aligned-section" id={ props.id }>
            { props.hasCoverImage ?
                // If the left side is an image, insert props.img
                <div className="left-section">
                    { props.img }
                </div>
                :
                // Otherwise, insert title and body text
                <div className="left-section">
                    <h3 className="accent">{ props.title }</h3>
                    <h3>{ props.altTitle }</h3>
                    <h4 className="accent">{ props.subTitle }</h4>
                    <p>{ props.body }</p>
                </div>
            }
            <div className="right-section">
                { props.children }
            </div>
        </div>
    );
}