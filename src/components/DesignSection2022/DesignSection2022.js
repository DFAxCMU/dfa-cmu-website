import React from "react";
import AlignedSectionMid from "../AlignedSectionMid/AlignedSectionMid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";

/*  DesignSection2022 is a component that consistently formats project information
    about the design process for projects post 2022. Each design step is associated with two types of
    content and the component may be given input for both, one, or neither. 
*/

// descriptions and formatting for the 6 design steps
const blurbs = {
    Identify: {
        subTitle: "define target problem spaces",
    },
    Immerse: {
        subTitle: "understand your problem spaces",
    },
    Reframe: {
        subTitle: "define your goals and determine your impact",
    },
    Ideate: {
        subTitle: "generate a variety of solutions for meaningful change",
    },
    Build: {
        subTitle: "make your ideas into tangible projects",
    },
    Test: {
        subTitle: "get feedback to uncover insights and improve your solution",
    }
}

export default function DesignSection2022(props) {
    return (
        <div className="design-process-section-2022">
            { props.leftContent || props.rightContent ?
                <div className="design-process">
                    <AlignedSectionMid
                        hasCoverImage={ false }
                        left={ <p>{ props.leftContent }</p>
                        }
                        right={
                            <>
                            <h3>{ props.designStep }</h3>
                            <p>{ blurbs[props.designStep].subTitle }</p>
                            <p>{ props.rightContent }</p>
                            </>
                        }
                    >
                    </AlignedSectionMid>
                </div>
                :
                // display nothing if both props.leftContent and props.rightContent are empty
                <div></div>
            }
        </div>
    )
}