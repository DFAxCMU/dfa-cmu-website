import React from "react";

export default function AlignedSection(props) {
    return (
        <div className="aligned-section">
                { props.hasCoverImage
                    ? (
                        <div className="left-section">

                        </div>
                    )
                    : (
                        <div className="left-section">
                            <h3 className="accent">{ props.title }</h3>
                            <p>{ props.body }</p>
                        </div>
                    )
                }
            <div className="right-section">
                { props.children }
            </div>
        </div>
    );
}