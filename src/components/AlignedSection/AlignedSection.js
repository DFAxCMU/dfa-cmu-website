import React from "react";
import "./style.css";

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
                            <h3>{ props.altTitle }</h3>
                            <h4 className="accent">{ props.subTitle }</h4>
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