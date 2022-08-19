import React from "react";
import Tag from "../Tag/Tag";
import { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

/*  a component for a card that displays information about a project and links
    to the corresponding project page.
*/

export default function ProjectCard(props) {
    // Event listener to record the user's screen dimensions
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({ width, height });
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
                    <GatsbyImage image={ getImage(props.coverImg) } alt="cover image for project" />
                </div>
                <Tag
                    text= {props.category}
                />
                { windowDimensions.width < 576 ?
                    // if the screen is narrow, display less information
                    <div className="project-text">
                        <h3 className="accent">{ props.title }</h3>
                    </div>
                    :
                    // if the screen is wide, display more information
                    <div className="project-text">
                        <h3 className="accent">{ props.title }</h3>
                        {/* <h4>{ props.category }</h4>
                        <h5>{ props.team }</h5> */}
                        <p className="small-body">{ props.body }</p>
                    </div>
                }
            </div>
        </a>
    );
}