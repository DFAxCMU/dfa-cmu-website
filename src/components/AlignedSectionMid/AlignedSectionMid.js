import React from "react";
import "./style.css";

/*  AlignedSectionMid is a component that consistently styles sections with a left
    and right half spliting the screen in half 50%, 50%
*/

export default function AlignedSectionMid(props) {
    return (
        <div className="aligned-section-mid" id={ props.id }>
            <div className="container">
                { props.hasCoverImage ?
                    // If the left side is an image, insert props.img
                    <div className="left-section-mid-pic">
                        { props.img }
                    </div>
                    :
                    // Otherwise, insert title and body text
                    <div className="left-section-mid">
                        { props.title }
                        { props.altTitle }
                        { props.subTitle }
                        { props.body }
                        { props.leftchildren}
                    </div>
                }
                <div className="right-section-mid">
                    { props.children }
                </div>
            </div>
        </div>
    );
}