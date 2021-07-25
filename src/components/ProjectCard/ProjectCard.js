import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

export default function ProjectCard(props) {
    return (
        <a
            href={ props.href }
            style={{textDecoration: "none"}}
        >
            <div className="project-card">
                <div className="project-img">
                    <GatsbyImage image={ getImage(props.coverImg) } alt="" />
                </div>
                { window.screen.availWidth < 576 ?
                    <div className="project-text">
                        <h2 className="accent">{ props.title }</h2>
                        <h4>{ props.category }</h4>
                    </div>
                    :
                    <div className="project-text">
                        <h2 className="accent">{ props.title }</h2>
                        <h4>{ props.category }</h4>
                        <h5>{ props.team }</h5>
                        <p className="small-body">{ props.body }</p>
                    </div>
                }
            </div>
        </a>
    );
}