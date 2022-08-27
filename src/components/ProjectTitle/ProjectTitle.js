import React from "react";
import "./style.css";
import Tag from "../Tag/Tag";

/*  AlignedSectionMid is a component that consistently styles sections with a left
    and right half spliting the screen in half 50%, 50%
*/

export default function ProjectTitle(props) {
    return (
        <div className="projectTitle" id={ props.id }>
            <div className="container">
                <div className="projectTitle-left-section-mid">
                    <h2 className="projectTitle-h2">{ props.title }</h2>
                    <Tag text={ props.category }/>
                    <p className="projectTitle-p">{ props.description }</p>
                    <h3 className="projectTitle-h3">Team</h3>
                    <p className="projectTitle-p">{ props.team }</p>
                    <div className="projectTitle-details">
                        <h3 className="projectTitle-h3">Community Partner</h3>
                        <h3 className="projectTitle-h3">Timeline</h3>
                        <p className="projectTitle-p">{ props.partner}</p>
                        <p className="projectTitle-p">{ props.timeline}</p>
                    </div>
                </div>
                <div className="projectTitle-right-section-mid">
                    { props.children }
                </div>
            </div>
        </div>
    );
}