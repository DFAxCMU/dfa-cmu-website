import React from "react";
import { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
export default function ProjectCard(props) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <a
            href={ props.href }
            style={{textDecoration: "none"}}
        >
            <div className="project-card">
                <div className="project-img">
                    <GatsbyImage image={ getImage(props.coverImg) } alt="" />
                </div>
                { windowDimensions.width < 576 ?
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