import React from "react";
import AlignedSection from "../AlignedSection/AlignedSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

/*  DesignSection is a component that consistently formats project information
    about the design process. Each design step is associated with two types of
    content and the component may be given input for both, one, or neither. 
*/

// descriptions and formatting for the 6 design steps
const blurbs = {
    Identify: {
        subTitle: "define target problem spaces",
        left: <h4><b className="accent">How Can We's</b> that define problem spaces to research</h4>,
        right: <h4>Initial <b className="accent">knowledge and assumptions</b></h4>
    },
    Immerse: {
        subTitle: "understand your problem spaces",
        left: <h4>Empathize with stakeholders through <b className="accent">personas or stories</b></h4>,
        right: <h4><b className="accent">Key insights</b> from additional research</h4>
    },
    Reframe: {
        subTitle: "define your goals and determine your impact",
        left: <h4>Narrowed down <b className="accent">How Can We's</b> to ideate for</h4>,
        right: <h4>Specify qualities that would make a solution have <b className="accent">successful impact</b></h4>
    },
    Ideate: {
        subTitle: "generate a variety of solutions for meaningful change",
        left: <h4><b className="accent">Sketches and process</b></h4>
    },
    Build: {
        subTitle: "make your ideas into tangible projects",
        left: <h4><b className="accent">Final prototype</b></h4>
    },
    Test: {
        subTitle: "get feedback to uncover insights and improve your solution",
        left: <h4><b className="accent">Quotes from users or experts</b> about your solution</h4>,
        right: <h4><b className="accent">Next steps</b> based on the insights</h4>
    }
}

export default function DesignSection(props) {
    return (
        <div className="design-process-section">
            { props.leftContent || props.rightContent ?
                <div>
                    <AlignedSection
                        noImg={ true }
                        title={ props.designStep }
                        subTitle={ blurbs[props.designStep].subTitle }
                    >
                        <div className="content-wrapper">
                            { props.leftContent ?
                                <div className="left-content">
                                    { blurbs[props.designStep].left }
                                    { <p>{ props.leftContent }</p> }
                                </div>
                                :
                                // display nothing if props.leftContent is empty
                                <div></div>
                            }
                            { props.rightContent ?
                                <div className="right-content">
                                    { blurbs[props.designStep].right }
                                    { props.designStep === "Ideate" || props.designStep === "Build" ?
                                        <GatsbyImage image={ getImage(props.rightContent.node) } alt="an image of the project's preliminary ideas or prototypes" />
                                        :
                                        <p>{ props.rightContent }</p>
                                    }
                                </div>
                                :
                                // display nothing if props.rightContent is empty
                                <div></div>
                            }
                        </div>
                    </AlignedSection>
                </div>
                :
                // display nothing if both props.leftContent and props.rightContent are empty
                <div></div>
            }
        </div>
    )
}